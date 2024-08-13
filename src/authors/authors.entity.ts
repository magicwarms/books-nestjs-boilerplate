import { Author } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorEntity implements Author {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;

    @ApiProperty()
    is_active: boolean;
}