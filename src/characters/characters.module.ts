import { CharacterSchema } from './schemas/character.schema';
import { Module } from '@nestjs/common';
import { CharactersResolver } from './characters.resolver';
import { CharactersService } from './characters.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Character', schema: CharacterSchema }])
  ],
  providers: [CharactersResolver, CharactersService]
})
export class CharactersModule {}
