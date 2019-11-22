import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateCharacterInput {
  @Field()
  name: string;

  @Field()
  speed: number;

  @Field()
  hp: number;

  @Field()
  physicalDefense: number;

  @Field()
  arcaneDefense: number;

  @Field()
  attack: number;

  @Field()
  critDamage: number;

  @Field()
  critRate: number;

  @Field()
  isSupport: boolean;

  @Field()
  isLimited: boolean;

  @Field()
  releaseDate: Date;
}
