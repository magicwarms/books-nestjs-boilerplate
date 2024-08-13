import { Author } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthorRepository {
    constructor(private prisma: PrismaService) { }

    async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
        return this.prisma.author.create({
            data: createAuthorDto,
        });
    }

    async findAll(): Promise<Author[]> {
        return this.prisma.author.findMany();
    }

    async findOne(id: number): Promise<Author | null> {
        if (!id) throw new Error('Id is required');
        const author = await this.prisma.author.findUnique({ where: { id } });
        if (!author) throw new Error('Author not found');
        return author;
    }

    async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
        return this.prisma.author.update({
            where: { id },
            data: updateAuthorDto,
        });
    }

    remove(id: number) {
        return this.prisma.author.delete({ where: { id } });
    }
}
