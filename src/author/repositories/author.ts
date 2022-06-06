export class Author {}
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Author } from '../entities/author';

import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectModel(Author) private author: ReturnModelType<typeof Author>
  ) {}

  async create(authorDTO: any): Promise<Author> {
    const created = new this.author(authorDTO);
    return await created.save();
  }

  async findAll(): Promise<Author[] | null> {
    return await this.author.find().exec();
  }
}