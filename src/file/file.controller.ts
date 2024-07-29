import { Controller, Post, Param, Res } from '@nestjs/common';
import { Person } from 'src/person/dto/person.dto';
import { PersonService } from 'src/person/person.service';
import { FileService } from './file.service';
import { Response } from 'express';


@Controller('file')
export class FileController {
  constructor(
    private fileService: FileService,
    private personService: PersonService,
  ) {}

  @Post(':fileName/process')
  processFile(@Param('fileName') fileName: string) {
    const csv = this.fileService.getFileFromFileName(fileName);
    const content = this.fileService.extractContentToString(csv);
    const parsedCsv = this.fileService.parseCsvContent(content);

    parsedCsv.map((item: Person) => {
      this.personService.save(item);
    });
  }
  @Post(':fileName/generate-pdf')
  async generatePdf(@Param('fileName') fileName: string, @Res() res: Response) {
    const csv = this.fileService.getFileFromFileName(fileName);
    const content = this.fileService.extractContentToString(csv);
    const parsedCsv = this.fileService.parseCsvContent(content);

    const pdfBuffer = await this.fileService.generatePdf(parsedCsv);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${fileName}.pdf`,
      'Content-Length': pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }
}