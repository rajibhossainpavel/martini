import { prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

export class CatModel {
  @IsString()
  @prop({ required: true })
  name: string;
}