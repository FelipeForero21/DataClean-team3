import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileProcessingService } from './file-processing.service';
import { UploadFileDto } from './dto/file-upload.dto';
import { ProcessFileDto } from './dto/file-process.dto';

@Controller('files')
export class FileProcessingController {
  constructor(private readonly fileProcessingService: FileProcessingService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() uploadFileDto: UploadFileDto) {
    return this.fileProcessingService.uploadFile(file, uploadFileDto);
  }

  @Post('process')
  processFile(@Body() processFileDto: ProcessFileDto, @Body('data') data: any[]) {
    return this.fileProcessingService.processFile(processFileDto, data);
  }
}
