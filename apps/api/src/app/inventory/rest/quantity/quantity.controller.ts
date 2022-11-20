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

import { Quantity, QuantityView } from './entity';
import { CreateQuantityDto, UpdateQuantityDto } from './dto';

import { QuantityViewService } from './quantity-view.service';
import { QuantityService } from './quantity.service';

@ApiTags('quantity')
@Controller('quantity')
export class QuantityController {
  constructor(
    private readonly service: QuantityService,
    private readonly viewService: QuantityViewService
  ) {}
  @CanRead('quantity')
  @Get()
  readQuantity(
    @Query() paginatorDto: PaginatorDto<Quantity | QuantityView>,
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

  @CanRead('quantity')
  @Get(':id')
  readQuantityById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('quantity')
  @Post()
  writeQuantity(@Body() body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @CanWrite('quantity')
  @Put(':id')
  updateQuantity(@Param('id') id: number, @Body() body: UpdateQuantityDto) {
    return this.service.update(id, body);
  }

  @CanWrite('quantity')
  @Delete(':id')
  deleteQuantity(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('quantity')
  @Patch()
  functionsQuantity(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }

  @CanWrite('quantity')
  @Post(':id/sku/:skuId')
  setskuToQuantity(id: number, skuId: number) {
    return this.service.set(id, skuId, 'sku');
  }

  @CanWrite('quantity')
  @Post(':id/sku')
  unsetskuFromQuantity(id: number) {
    return this.service.unset(id, 'sku');
  }

  @CanWrite('quantity')
  @Post(':id/store/:storeId')
  setstoreToQuantity(id: number, storeId: number) {
    return this.service.set(id, storeId, 'store');
  }

  @CanWrite('quantity')
  @Post(':id/store')
  unsetstoreFromQuantity(id: number) {
    return this.service.unset(id, 'store');
  }
}
