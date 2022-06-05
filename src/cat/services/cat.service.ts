import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CatModel } from '../models/cat.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(CatModel) private cat: ReturnModelType<typeof CatModel>
  ) {}

  async create(createCatDto: { name: string }): Promise<CatModel> {
    const createdCat = new this.cat(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<CatModel[] | null> {
    return await this.cat.find().exec();
  }
}