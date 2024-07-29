import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { FileModule } from './file/file.module';
import { TestController } from './api-key/api-key.controller';
import { TestService } from './api-key/api-key.service';

@Module({
  imports: [UploadModule, DatabaseModule, PersonModule, FileModule],
  controllers: [AppController, TestController],
  providers: [AppService, TestService],
})
export class AppModule {}