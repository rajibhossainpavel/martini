import {InputType, Field, Int} from '@nestjs/graphql'


@InputType()
export class ItemInput {
  @Field()
  readonly name: string

  @Field()
  parent_name: string

   @Field()
  readonly is_active: number=1;

}