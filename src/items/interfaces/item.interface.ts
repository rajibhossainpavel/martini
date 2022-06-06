

import { Document } from 'mongoose';

export interface Item extends Document {
   readonly category_name: string;
   readonly parent_category: string;
}