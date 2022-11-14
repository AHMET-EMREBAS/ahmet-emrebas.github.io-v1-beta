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

import {
  CreateQuantityDto,
  UpdateQuantityDto,
} from 'models/inventory/quantity';

import { QuantityViewService } from './quantity-view.service';
import { QuantityService } from './quantity.service';

@ApiTags('quantity')
@Controller('quantity')
export class QuantityController {
  constructor(
    private readonly service: QuantityService,
    private readonly viewService: QuantityViewService
  ) {}

  @Get()
  readQuantity(
    @Query() paginatorDto: PaginatorDto,
    @Query() viewDto: ViewDto,
    @Query() query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['quantity', 'store', 'sku']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Get(':id')
  readQuantityById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writeQuantity(@Body() body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updateQuantity(@Param('id') id: number, @Body() body: UpdateQuantityDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteQuantity(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Post(':id/sku/:skuId')
  setskuToQuantity(id: number, skuId: number) {
    return this.service.set(id, skuId, 'sku');
  }

  @Post(':id/sku')
  unsetskuFromQuantity(id: number) {
    return this.service.unset(id, 'sku');
  }

  @Post(':id/store/:storeId')
  setstoreToQuantity(id: number, storeId: number) {
    return this.service.set(id, storeId, 'store');
  }

  @Post(':id/store')
  unsetstoreFromQuantity(id: number) {
    return this.service.unset(id, 'store');
  }
}