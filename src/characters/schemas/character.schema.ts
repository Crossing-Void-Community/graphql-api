import { initSchema } from './../../shared/schemas/base.schema';
import * as mongoose from 'mongoose';

const model = 'character';

export const CharacterSchema = new mongoose.Schema({
  name: String,
  speed: Number,
  hp: Number,
  physicalDefense: Number,
  arcaneDefense: Number,
  attack: Number,
  critDamage: Number,
  critRate: Number,
  isSupport: Boolean,
  isLimited: Boolean,
  releaseDate: Date
});

initSchema(CharacterSchema, model);
