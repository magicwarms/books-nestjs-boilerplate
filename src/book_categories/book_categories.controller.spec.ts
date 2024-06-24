import { Test, TestingModule } from '@nestjs/testing';
import { BookCategoriesController } from './book_categories.controller';
import { BookCategoriesService } from './book_categories.service';

describe('BookCategoriesController', () => {
  let controller: BookCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookCategoriesController],
      providers: [BookCategoriesService],
    }).compile();

    controller = module.get<BookCategoriesController>(BookCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
