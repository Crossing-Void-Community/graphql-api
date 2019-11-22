import { CreateCharacterInput } from './dto/create-character.input';
import { Character } from './models/character';
import { CharactersService } from './characters.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('Characters')
export class CharactersResolver {
  private readonly charactersService;

  constructor(charactersService: CharactersService) {
    this.charactersService = charactersService;
  }

  @Query(() => [Character])
  async characters(): Promise<Character> {
    return this.charactersService.findAll();
  }

  @Mutation(() => Character)
  async createCharacter(
    @Args('createCharacter') createCharacterInput: CreateCharacterInput
  ): Promise<Character> {
    return this.charactersService.create(createCharacterInput);
  }
}
