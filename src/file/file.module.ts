import { Module } from '@nestjs/common';
import { PersonModule } from 'src/person/person.module';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [PersonModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}