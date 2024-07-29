import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [UploadModule, DatabaseModule, PersonModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}