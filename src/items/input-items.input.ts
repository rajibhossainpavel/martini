import {InputType, Field, Int} from '@nestjs/graphql'

@InputType()
export class ItemInput {
  @Field()
   category_name: string

   @Field()
   parent_category: string

}