import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsNumber } from 'class-validator';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(200)
    @ApiProperty()
    name: string
}
