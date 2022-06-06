import * as mongoose from 'mongoose';
import * as MpathPlugin from 'mongoose-mpath';

export const ItemSchema = new mongoose.Schema({
  name: String,
  is_active:Number
})
ItemSchema.plugin(MpathPlugin);