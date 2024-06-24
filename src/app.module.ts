import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { BookCategoriesModule } from './book_categories/book_categories.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthorsModule,
    BookCategoriesModule,
    PrismaModule
  ],
})
export class AppModule { }
