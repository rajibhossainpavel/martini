//import { Prop, modelOptions} from '@typegoose/typegoose';
import { Prop} from '@typegoose/typegoose';

//@modelOptions({schemaOptions: {timestamps: true}})
export class Author {
  @Prop({ required: true })
  name!: string;

  @Prop()
  about?: string;

  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;
}
