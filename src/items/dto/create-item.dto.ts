import { ObjectType, Field, Float, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
@ObjectType()
export class ItemType {
  @Field(() => ID)
  @IsString()
   id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
   name: string;
  
  @Field()
  @IsString()
  @IsNotEmpty()
  categoy_name: string;
  
  @Field()
  @IsString()
  @IsNotEmpty()
  parent_categoy: string;
  
  @Field(() => Float)
  @IsNumber()
   price: number;
  
   @Field()
  @IsString()
   description: string;

  @Field(() => Int)
  @IsNumber()
  parent_num: number;

  @Field(() => Int)
  @IsNumber()
  left_num: number;
     
  @Field(() => Int)
  @IsNumber()
  right_num: number;
}
