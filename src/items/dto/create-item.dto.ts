import { ObjectType, Field, Int, ID} from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
@ObjectType()
export class ItemType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly category_name!: string;
  
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly parent_category!: string;

  @Field(() => Int)
  @IsNumber()
  readonly is_active?: number;

  @Field(() => Int)
  @IsNumber()
  readonly parent_num?: number;

  @Field(() => Int)
  @IsNumber()
  readonly left_num?: number;
     
  @Field(() => Int)
  @IsNumber()
  readonly right_num?: number;
}
