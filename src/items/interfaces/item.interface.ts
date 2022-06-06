

import { Document } from 'mongoose';

export interface Item extends Document {
   category_name: string;
   parent_category: string;
}