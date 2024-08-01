import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) { }

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.prisma.author.create({
      data: createAuthorDto
    })
  }

  async findAll(): Promise<Author[]> {
    return this.prisma.author.findMany()
  }

  async findOne(id: number): Promise<Author | null> {
    if (!id) throw new Error('Id is required')
    return this.prisma.author.findUnique({ where: { id } })
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    return this.prisma.author.update({
      where: { id },
      data: updateAuthorDto
    })
  }

  remove(id: number) {
    return this.prisma.author.delete({ where: { id } })
  }
}
