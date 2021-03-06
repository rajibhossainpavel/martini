import { Logger } from "@nestjs/common";
import { Resolver } from "@nestjs/graphql";
import { Args, Mutation, Query } from "@nestjs/graphql";
import { ItemType } from "./dto/create-item.dto";
import { ItemInput } from "./input-items.input";
import { DisableItemInput } from "./disable-input-items.input";
import { ItemsService } from "./items.service";


@Resolver(of => ItemType)
export class ItemsResolver {
  constructor(
    private readonly itemsService: ItemsService
  ) { }
  @Query(returns => [ItemType])
  async items(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Query(returns => ItemType)
  async itemByNameWithParent(@Args('name') name: string): Promise<ItemType> {
    return this.itemsService.itemByNameWithParent(name);
  }

  @Query(returns => String)
  async hello(): Promise<string> {
    return 'Say Hello'
  }

  @Mutation(returns => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemType> {
    return this.itemsService.create(input);
  }

  @Mutation(returns => ItemType)
  async updateItem(@Args('id') id: string, @Args('input') input: ItemInput): Promise<ItemType> {
    return this.itemsService.update(id, input);
  }

  @Mutation(returns => String)
  async disableItem(@Args('disable_input') disable_input: DisableItemInput): Promise<String> {
    return this.itemsService.disableItem(disable_input.name);
  }

  @Mutation(returns => ItemType)
  async deleteItem(@Args('id') id: string): Promise<ItemType> {
    return this.itemsService.delete(id);
  }

}