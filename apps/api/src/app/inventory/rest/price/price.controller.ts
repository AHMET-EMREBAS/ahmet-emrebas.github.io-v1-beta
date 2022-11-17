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

import {
  Price,
  PriceView,
  CreatePriceDto,
  UpdatePriceDto,
} from '../../models/price';

import { PriceViewService } from './price-view.service';
import { PriceService } from './price.service';

@ApiTags('price')
@Controller('price')
export class PriceController {
  constructor(
    private readonly service: PriceService,
    private readonly viewService: PriceViewService
  ) {}

  @Get()
  readPrice(
    @Query() paginatorDto: PaginatorDto<Price | PriceView>,
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
  readPriceById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writePrice(@Body() body: CreatePriceDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updatePrice(@Param('id') id: number, @Body() body: UpdatePriceDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deletePrice(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Patch()
  functions(@Query() whereDto: WhereDto, @Query() functions: FunctionsDto) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }

  @Post(':id/sku/:skuId')
  setskuToPrice(id: number, skuId: number) {
    return this.service.set(id, skuId, 'sku');
  }

  @Post(':id/sku')
  unsetskuFromPrice(id: number) {
    return this.service.unset(id, 'sku');
  }

  @Post(':id/pricelevel/:pricelevelId')
  setpricelevelToPrice(id: number, pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Post(':id/pricelevel')
  unsetpricelevelFromPrice(id: number) {
    return this.service.unset(id, 'pricelevel');
  }
}
