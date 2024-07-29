import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [UploadModule, DatabaseModule, PersonModule, FileModule],
=======
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileProcessingModule } from './file-processing/file-processing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    FileProcessingModule,
  ],
>>>>>>> ca5c6480340395f453e704d99ca861096eadaf80
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}