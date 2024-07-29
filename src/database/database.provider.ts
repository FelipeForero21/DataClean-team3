import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://elipeforero21:dJybd8CPBjePuhOF@assesment.yugiws4.mongodb.net/',
      ),
  },
];