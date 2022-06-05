import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatService } from '../services/cat.service';
import { CatModel} from '../models/cat.model';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  async getCats(): Promise<CatModel[] | null> {
    return await this.catService.findAll();
  }

  @Post()
  async create(@Body() cat: CatModel): Promise<CatModel> {
    return await this.catService.create(cat);
  }
}