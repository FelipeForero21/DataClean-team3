import { DatabaseModule } from 'src/database/database.module';
import { Module } from '@nestjs/common';
import { personProviders } from 'src/person.provider';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [PersonService, ...personProviders],
  exports: [PersonService],
})
export class PersonModule {}