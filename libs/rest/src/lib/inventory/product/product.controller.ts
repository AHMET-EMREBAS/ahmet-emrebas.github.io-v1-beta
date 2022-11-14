import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateProductDto, UpdateProductDto } from 'models/inventory/product';

import { ProductViewService } from './product-view.service';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly service: ProductService,
    private readonly viewService: ProductViewService
  ) {}

  @Get()
  readProduct(
    @Query() paginatorDto: PaginatorDto,
    @Query() viewDto: ViewDto,
    @Query() query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains([
        'id',
        'uuid',
        'name',
        'description',
        'category',
        'department',
      ]),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Get(':id')
  readProductById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writeProduct(@Body() body: CreateProductDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() body: UpdateProductDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Post(':id/category/:categoryId')
  setcategoryToProduct(id: number, categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @Post(':id/category')
  unsetcategoryFromProduct(id: number) {
    return this.service.unset(id, 'category');
  }

  @Post(':id/department/:departmentId')
  setdepartmentToProduct(id: number, departmentId: number) {
    return this.service.set(id, departmentId, 'department');
  }

  @Post(':id/department')
  unsetdepartmentFromProduct(id: number) {
    return this.service.unset(id, 'department');
  }
}
