import * as mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  age: Number,
  address: String,
});