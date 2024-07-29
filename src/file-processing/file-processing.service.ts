import { Injectable } from '@nestjs/common';
import { UploadFileDto } from './dto/file-upload.dto';
import { ProcessFileDto } from './dto/file-process.dto';

@Injectable()
export class FileProcessingService {
  uploadFile(file: Express.Multer.File, uploadFileDto: UploadFileDto) {
    return { message: 'File uploaded successfully' };
  }

  processFile(processFileDto: ProcessFileDto, data: any[]) {
    if (processFileDto.removeDuplicates) {
      data = this.removeDuplicates(data);
    }

    return { message: 'File processed successfully', data };
  }

  private removeDuplicates(data: any[]): any[] {
    const uniqueData = Array.from(new Set(data.map(item => item.id)))
      .map(id => data.find(item => item.id === id));
    return uniqueData;
  }
}
