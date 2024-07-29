import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors';
import { diskStorage } from 'multer';
import { editFileName } from './file.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('upload')
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
  @ApiOperation({ summary: 'Upload a CSV file' })
  @ApiResponse({ status: 201, description: 'The CSV file has been successfully uploaded.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async uploadCsv(@UploadedFile() file: Express.Multer.File) {
    return { filePath: `${file.filename}` };
  }
}
