import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Patch,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  FunctionsDto,
  PaginatorDto,
  QueryDto,
  ViewDto,
  WhereDto,
} from 'core/dto';

import { CreateCategoryDto, UpdateCategoryDto } from '../../models/category';

import { CategoryViewService } from './category-view.service';
import { CategoryService } from './category.service';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly service: CategoryService,
    private readonly viewService: CategoryViewService
  ) {}

  @Get()
  readCategory(
    @Query() paginatorDto: PaginatorDto,
    @Query() viewDto: ViewDto,
    @Query() whereDto: WhereDto
  ) {
    const q = {
      ...paginatorDto,
      where: whereDto.where,
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Get(':id')
  readCategoryById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writeCategory(@Body() body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() body: UpdateCategoryDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Patch()
  functions(@Query() functions: FunctionsDto) {
    if (functions.query === 'count') {
      return this.service.count();
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }
}
