import { ObjectType, Field, Int, ID} from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
@ObjectType()
export class ItemType {
  @Field(() => ID)
  @IsString()
   id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  category_name!: string;
  
  @Field()
  @IsString()
  @IsNotEmpty()
  parent_category!: string;

  @Field(() => Int)
  @IsNumber()
  is_active?: number;

  @Field(() => Int)
  @IsNumber()
  parent_num?: number;

  @Field(() => Int)
  @IsNumber()
  left_num?: number;
     
  @Field(() => Int)
  @IsNumber()
  right_num?: number;
}
