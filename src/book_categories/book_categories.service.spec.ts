import { Test, TestingModule } from '@nestjs/testing';
import { BookCategoriesService } from './book_categories.service';

describe('BookCategoriesService', () => {
  let service: BookCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookCategoriesService],
    }).compile();

    service = module.get<BookCategoriesService>(BookCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
