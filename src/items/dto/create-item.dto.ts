import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
@ObjectType()
export class ItemType {
  @Field(() => ID)
  @IsString()
   id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
   title: string;
  @Field(() => Int)
  @IsNumber()
   price: number;
  @Field()
  @IsString()
   description: string;
}
