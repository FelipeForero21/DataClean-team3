import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Person } from 'src/person/dto/person.dto';
import { PersonService } from 'src/person/person.service';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('file')
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
  @ApiOperation({ summary: 'Upload a file and process it' })
  @ApiResponse({ status: 201, description: 'File processed and PDF generated' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File, 
    @Res() res: Response
  ) {
    try {
      const csv = this.fileService.getFileFromFileName(file.filename);
      const content = this.fileService.extractContentToString(csv);
      const parsedCsv = this.fileService.parseCsvContent(content);

      parsedCsv.map((item: Person) => {
        this.personService.save(item);
      });

      const pdfBuffer = await this.fileService.generatePdf(parsedCsv);

      const pdfPath = join(__dirname, '../../uploads', `${file.filename}.pdf`);
      writeFileSync(pdfPath, pdfBuffer);

      res.status(201).json({
        message: 'File processed and PDF generated',
        pdfPath: pdfPath.replace(__dirname, ''),
      });
    } catch (error) {
      res.status(400).json({
        message: 'Error processing file',
        error: error.message,
      });
    }
  }
}
