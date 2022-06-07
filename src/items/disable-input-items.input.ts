import {InputType, Field, Int} from '@nestjs/graphql'


@InputType()
export class DisableItemInput {
  @Field()
  readonly name: string
}