import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('DATA CLEAN RIWI TEAM 3')
    .setDescription(
      'This API provides functionalities for file management and processing. Users can upload files, perform data sanitization tasks such as removing duplicates, validating formats, and sorting columns, and download the processed files in various formats. The API supports integration with cloud storage for file management and includes comprehensive logging for request tracking. Ensure you authenticate using the API key provided for secure access to the services.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);
  await app.listen(3000);
}
bootstrap();
