import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemInput } from './input-items.input';
import { ItemType } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private itemModule: Model<Item>
  ) { }

  async create(createItemDto: ItemInput): Promise<ItemType> {
    if(createItemDto['parent_name']!==""){
      const parentObject=await this.findOneByName(createItemDto.parent_name);
      createItemDto['parent']=parentObject;
    }
    if(createItemDto['name']!==""){
      const curObject=await this.findOneByName(createItemDto.name);
      if(curObject!==null){
        return curObject;
      }
    }
    delete createItemDto['parent_name']
  
    const createdItem = new this.itemModule(createItemDto);
   return await createdItem.save() as any;
 
  }
  async findAll(): Promise<ItemType[]> {
    return await this.itemModule.find().exec();
  }
  async findOne(id: string): Promise<ItemType> {
    return await this.itemModule.findOne({ _id: id });
  }
  async findOneByName(name: string): Promise<ItemType> {
    return await this.itemModule.findOne({ name: name });
  }
  async itemByNameWithParent(name: string): Promise<ItemType> {
    let curNode=await this.findOneByName(name);
    if(curNode.path.indexOf("#")>=0){
    const curArray=curNode.path.split("#");
    const parentId=curArray[curArray.length-2];
    const parentNode=await this.findOne(parentId);
    curNode.parent_name=parentNode.name;


    }else{
      const parentNode="";
      curNode.parent_name=parentNode;
    }
    return curNode;
  }
  

  async disableItem(name: string): Promise<String>{
    let curNode=await this.findOneByName(name);
    if(curNode!==null){
      const path=curNode.path;
      const allNodes=await this.findAll();
      allNodes.forEach(async(element)=>{
        if(element.path.indexOf(path)>=0){
          await this.itemModule.findByIdAndUpdate(element.id, {is_active: 0});

        }
      });

    }else{
      return "Failed."
    }
    
    return "success.";
  }
  async delete(id: string): Promise<ItemType> {
    return await this.itemModule.findByIdAndRemove(id);
  }

  async update(id: string, item: ItemInput): Promise<ItemType> {
    return await this.itemModule.findByIdAndUpdate(id, { new: true });
  }
}

function category_name(id: string, category_name: any, arg2: { new: true; }): ItemType | PromiseLike<ItemType> {
  throw new Error('Function not implemented.');
}
