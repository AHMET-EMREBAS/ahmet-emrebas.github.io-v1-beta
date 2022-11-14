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

import { CreateSkuDto, UpdateSkuDto } from 'models/inventory/sku';

import { SkuViewService } from './sku-view.service';
import { SkuService } from './sku.service';

@ApiTags('sku')
@Controller('sku')
export class SkuController {
  constructor(
    private readonly service: SkuService,
    private readonly viewService: SkuViewService
  ) {}

  @Get()
  readSku(
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
        'barcode',
        'description',
        'product',
      ]),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Get(':id')
  readSkuById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writeSku(@Body() body: CreateSkuDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updateSku(@Param('id') id: number, @Body() body: UpdateSkuDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteSku(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Post(':id/product/:productId')
  setproductToSku(id: number, productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @Post(':id/product')
  unsetproductFromSku(id: number) {
    return this.service.unset(id, 'product');
  }
}
