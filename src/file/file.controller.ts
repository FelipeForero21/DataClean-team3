import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Person } from 'src/person/dto/person.dto';
import { PersonService } from 'src/person/person.service';
import { File } from 'multer';
import { writeFileSync } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {
  constructor(
    private fileService: FileService,
    private personService: PersonService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
  }))
  async uploadFile(@UploadedFile() file: File, @Res() res: Response) {
    const csv = this.fileService.getFileFromFileName(file.filename);
    const content = this.fileService.extractContentToString(csv);
    const parsedCsv = this.fileService.parseCsvContent(content);

    parsedCsv.map((item: Person) => {
      this.personService.save(item);
    });

    const pdfBuffer = await this.fileService.generatePdf(parsedCsv);

    const pdfPath = join(__dirname, '../../uploads', `${file.filename}.pdf`);
    writeFileSync(pdfPath, pdfBuffer);

    res.json({
      message: 'File processed and PDF generated',
      pdfPath: pdfPath.replace(__dirname, ''),
    });
  }
}
