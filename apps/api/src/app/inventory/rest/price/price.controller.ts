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

import { CanRead, CanWrite } from '../../auth/decorators';

import { Price, PriceView } from './entity';
import { CreatePriceDto, UpdatePriceDto } from './dto';

import { PriceViewService } from './price-view.service';
import { PriceService } from './price.service';

@ApiTags('price')
@Controller('price')
export class PriceController {
  constructor(
    private readonly service: PriceService,
    private readonly viewService: PriceViewService
  ) {}
  @CanRead('price')
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

  @CanRead('price')
  @Get(':id')
  readPriceById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy({ id });
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('price')
  @Post()
  writePrice(@Body() body: CreatePriceDto) {
    return this.service.save(body);
  }

  @CanWrite('price')
  @Put(':id')
  updatePrice(@Param('id') id: number, @Body() body: UpdatePriceDto) {
    return this.service.update(id, body);
  }

  @CanWrite('price')
  @Delete(':id')
  deletePrice(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('price')
  @Patch()
  functionsPrice(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a function name.');
  }

  @CanWrite('price')
  @Post(':id/sku/:skuId')
  setskuToPrice(id: number, skuId: number) {
    return this.service.set(id, skuId, 'sku');
  }

  @CanWrite('price')
  @Post(':id/sku')
  unsetskuFromPrice(id: number) {
    return this.service.unset(id, 'sku');
  }

  @CanWrite('price')
  @Post(':id/pricelevel/:pricelevelId')
  setpricelevelToPrice(id: number, pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @CanWrite('price')
  @Post(':id/pricelevel')
  unsetpricelevelFromPrice(id: number) {
    return this.service.unset(id, 'pricelevel');
  }
}
