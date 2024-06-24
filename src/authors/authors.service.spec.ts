import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsService } from './authors.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

describe('AuthorsService', () => {
  let authorService: AuthorsService;
  let prismaMock: DeepMockProxy<PrismaClient>;
  beforeEach(async () => {
    prismaMock = mockDeep<PrismaClient>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorsService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

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

      prismaMock.author.findMany.mockResolvedValue(allAuthors);

      const authors = await authorService.findAll();
      expect(authors).toBeInstanceOf(Array);
      expect(authors).toEqual(allAuthors);
      expect(prismaMock.author.findMany).toHaveBeenCalled();
    });
  })

});

