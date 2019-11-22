import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Auditable {
  @Field()
  createdBy: string;

  @Field()
  createdDate: Date;

  @Field()
  lastModifiedBy: string;

  @Field()
  lastModifiedDate: Date;
}
