import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileProcessingModule } from './file-processing/file-processing.module';
import { TestController } from './api-key/api-key.controller';
import { TestService } from './api-key/api-key.service';

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

  controllers: [AppController, TestController],
  providers: [AppService, TestService],
})
export class AppModule {}