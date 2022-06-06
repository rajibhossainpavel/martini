import { AuthorRepository } from '../repositories/author';
import { AuthorDTO } from '../dtos/author';


export class AuthorService {
    constructor(private authorRepository: AuthorRepository) {}
  async create(authorDTO: AuthorDTO): Promise<any> {
        return await this.authorRepository.create(authorDTO);
    }
    
    async findAll(): Promise<any> {
        return await this.authorRepository.findAll();
      }

}
