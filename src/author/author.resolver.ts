import { Resolver } from '@nestjs/graphql';
import { AuthorService } from '../services/author';

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorService: AuthorService
  ) {}

  @Query()
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOneById(id);
  }

  /* @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  } */
}