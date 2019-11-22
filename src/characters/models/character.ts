import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Character {
  @Field(type => ID)
  id: string;

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

  @Field()
  createdBy: string;

  @Field()
  lastModifiedBy: string;

  @Field()
  createdDate: Date;

  @Field()
  lastModifiedDate: Date;
}
