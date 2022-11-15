import {
  FunctionsDto,
  PaginatorDto,
  ViewDto,
} from 'core/dto';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'models/inventory/product';

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
    @Query() viewDto: ViewDto
    // @Query() whereDto: WhereDto
  ) {
    // console.log(whereDto);
    console.log(paginatorDto);

    const q = {
      ...paginatorDto,
      // where: whereDto.where,
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

  @Patch()
  functions(@Query() functions: FunctionsDto) {
    if (functions.query === 'count') {
      return this.service.count();
    }
    throw new BadRequestException('Must provide a fucntion name.');
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
