import {
  FunctionsDto,
  PaginatorDto,
  ViewDto,
  WhereDto,
} from 'core/dto';

import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Category,
  CategoryView,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../models/category';
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
    @Query() paginatorDto: PaginatorDto<Category | CategoryView>,
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
  functions(@Query() whereDto: WhereDto, @Query() functions: FunctionsDto) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }
}
