import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { parse } from 'papaparse';
import { PDFDocument, rgb } from 'pdf-lib';

@Injectable()
export class FileService {
  getFileFromFileName(filename: string): Buffer {
    return readFileSync(`uploads/${filename}`);
  }

  extractContentToString(buffer: Buffer): string {
    return buffer.toString();
  }

  parseCsvContent(content: string) {
    const parsedCsv = parse(content, {
      header: true,
    });

    return parsedCsv.data;
  }
  async generatePdf(data: any[]): Promise<Buffer> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;

    let yPosition = height - 20;
    data.forEach((item, index) => {
      const text = `${item.name} ${item.lastName}, Age: ${item.age}, Address: ${item.address}`;
      page.drawText(text, {
        x: 20,
        y: yPosition,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
      yPosition -= 20;
    });

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  }
}