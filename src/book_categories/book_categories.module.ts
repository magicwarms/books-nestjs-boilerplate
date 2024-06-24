import { Module } from '@nestjs/common';
import { BookCategoriesService } from './book_categories.service';
import { BookCategoriesController } from './book_categories.controller';

@Module({
  controllers: [BookCategoriesController],
  providers: [BookCategoriesService],
})
export class BookCategoriesModule {}
