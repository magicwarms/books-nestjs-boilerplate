import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookCategoriesService } from './book_categories.service';
import { CreateBookCategoryDto } from './dto/create-book_category.dto';
import { UpdateBookCategoryDto } from './dto/update-book_category.dto';

@Controller('book-categories')
export class BookCategoriesController {
  constructor(private readonly bookCategoriesService: BookCategoriesService) {}

  @Post()
  create(@Body() createBookCategoryDto: CreateBookCategoryDto) {
    return this.bookCategoriesService.create(createBookCategoryDto);
  }

  @Get()
  findAll() {
    return this.bookCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookCategoryDto: UpdateBookCategoryDto) {
    return this.bookCategoriesService.update(+id, updateBookCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookCategoriesService.remove(+id);
  }
}
