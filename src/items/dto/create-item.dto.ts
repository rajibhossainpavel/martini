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
  readonly name!: string;

  @Field(() => Int)
  @IsNumber()
  readonly is_active?: number;
  @Field()
  @IsString()

  readonly path?: string;
}
