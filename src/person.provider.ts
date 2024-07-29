import { Connection } from 'mongoose';
import { PersonSchema } from './person/schemas/person.schema';

export const personProviders = [
  {
    provide: 'PERSON_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Person', PersonSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];