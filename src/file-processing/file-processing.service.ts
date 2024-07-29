import { Injectable } from '@nestjs/common';
import { UploadFileDto } from './dto/file-upload.dto';
import { ProcessFileDto } from './dto/file-process.dto';

@Injectable()
export class FileProcessingService {
  uploadFile(file: Express.Multer.File, uploadFileDto: UploadFileDto) {
    return { message: 'File uploaded successfully' };
  }

  processFile(processFileDto: ProcessFileDto) {
    return { message: 'File processed successfully' };
  }
}
