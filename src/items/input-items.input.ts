import {InputType, Field, Int} from '@nestjs/graphql'

@InputType()
export class ItemInput {
  @Field()
  readonly category_name: string

   @Field()
  readonly parent_category: string

}