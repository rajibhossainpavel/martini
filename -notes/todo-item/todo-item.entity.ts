import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
    collection: 'todo-items',
    toObject: { virtuals: true },
  },
})
export class TodoItemEntity implements Base{
  @Prop({ required: true })
  title!: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  completed!: boolean;

  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;
}