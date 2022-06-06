

import { Document } from 'mongoose';

export interface Item extends Document {
   title: string;
   price: number;
   description: string;
}