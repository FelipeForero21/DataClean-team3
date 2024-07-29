import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors';
  import { diskStorage } from 'multer';
  import { editFileName } from './file.service';
  import { File } from 'multer';

  
  @Controller('upload')
  export class UploadController {
    @Post()
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
          filename: editFileName,
        }),
      }),
    )
    async uploadCsv(@UploadedFile() file: File) {
        return { filePath: `${file.filename}` };
    }
  }