import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from '@prisma/client';
import { AuthorRepository } from './authors.repository';

@Injectable()
export class AuthorsService {
  constructor(private authorRepository: AuthorRepository) { }

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.create(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepository.findAll();
  }

  async findOne(id: number): Promise<Author | null> {
    if (!id) throw new Error('Id is required');
    const author = await this.authorRepository.findOne(id);
    if (!author) throw new Error('Author not found');
    return author;
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    return this.authorRepository.update(id, updateAuthorDto);
  }

  remove(id: number) {
    return this.authorRepository.remove(id);
  }
}
