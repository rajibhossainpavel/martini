import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  category_name: String,
  parent_category: String,
  is_active: Number,
  parent_num: Number,
  left_num: Number,
  right_num: Number
})