import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { PrismaService } from './../prisma/prisma.service';
import { AuthorRepository } from './authors.repository';

@Module({
  controllers: [AuthorsController],
  providers: [
    PrismaService,
    AuthorRepository,
    AuthorsService,
  ],
})
export class AuthorsModule { }
