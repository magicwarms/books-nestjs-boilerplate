import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { AuthorsService } from './authors.service';

import { CreateAuthorDto } from './dto/create-author.dto';

import { UpdateAuthorDto } from './dto/update-author.dto';

import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthorEntity } from './authors.entity';

@Controller({
  version: '1',

  path: 'authors',
})
@ApiTags('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) { }

  @Post('/create')
  @ApiCreatedResponse({ type: AuthorEntity })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get('/all')
  @ApiOkResponse({ type: AuthorEntity, isArray: true })
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AuthorEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AuthorEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AuthorEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.remove(id);
  }
}
