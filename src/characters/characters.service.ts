import { CreateCharacterInput } from './dto/create-character.input';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character } from './interfaces/character.interface';

@Injectable()
export class CharactersService {
  private readonly characterModel: Model<Character>;

  constructor(@InjectModel('Character') characterModel: Model<Character>) {
    this.characterModel = characterModel;
  }

  async create(createCharacterInput: CreateCharacterInput): Promise<Character> {
    const createdCharacter = new this.characterModel(createCharacterInput);

    return await createdCharacter.save();
  }

  async findAll(): Promise<Character[]> {
    return await this.characterModel.find().exec();
  }
}
