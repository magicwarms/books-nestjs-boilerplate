import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsService } from './authors.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { AuthorRepository } from './authors.repository';

describe('AuthorsService', () => {
  let authorRepository: AuthorRepository;
  let authorService: AuthorsService;
  let prismaMock: DeepMockProxy<PrismaClient>;
  beforeEach(async () => {
    prismaMock = mockDeep<PrismaClient>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorsService,
        AuthorRepository,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    authorRepository = module.get<AuthorRepository>(AuthorRepository);
    authorService = module.get<AuthorsService>(AuthorsService);


    prismaMock.author.findMany.mockClear();
  });

  it('should be defined', () => {
    expect(authorService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of authors', async () => {
      const allAuthors = [
        {
          id: 1,
          name: 'John Doe',
          created_at: new Date(),
          updated_at: new Date(),
          is_active: true
        },
        {
          id: 2,
          name: 'Jane Doe',
          created_at: new Date(),
          updated_at: new Date(),
          is_active: true
        },
      ]

      authorRepository.findAll = jest.fn().mockResolvedValue(allAuthors);

      const authors = await authorService.findAll();

      expect(authors).toBeInstanceOf(Array);
      expect(authors).toEqual(allAuthors);
      expect(authorRepository.findAll).toHaveBeenCalled();
    });
  })

});

