import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Person } from './dto/person.dto';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PERSON_MODEL')
    private personModel: Model<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async save(personDTO: Person) {
    this.personModel.create(personDTO);
  }
}