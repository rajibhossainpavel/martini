import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/martini'),
    CatModule
  ]
})
export class AppModule {}