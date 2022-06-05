import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatModel } from './models/cat.model';
import { CatController } from './controllers/cat.controller';
import { CatService } from './services/cat.service';

@Module({
  imports: [TypegooseModule.forFeature([CatModel])],
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule {}