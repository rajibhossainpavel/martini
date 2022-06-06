import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';

@ObjectType('Author')
export class AuthorDTO {
    @IDField(() => ID)
    id!: number;

  @FilterableField()
  name!: string;

  @Field()
  about?: string;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}