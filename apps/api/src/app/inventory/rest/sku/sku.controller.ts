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

import { Sku, SkuView } from './entity';
import { CreateSkuDto, UpdateSkuDto } from './dto';

import { SkuViewService } from './sku-view.service';
import { SkuService } from './sku.service';

@ApiTags('sku')
@Controller('sku')
export class SkuController {
  constructor(
    private readonly service: SkuService,
    private readonly viewService: SkuViewService
  ) {}
  @CanRead('sku')
  @Get()
  readSku(
    @Query() paginatorDto: PaginatorDto<Sku | SkuView>,
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

  @CanRead('sku')
  @Get(':id')
  readSkuById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('sku')
  @Post()
  writeSku(@Body() body: CreateSkuDto) {
    return this.service.save(body);
  }

  @CanWrite('sku')
  @Put(':id')
  updateSku(@Param('id') id: number, @Body() body: UpdateSkuDto) {
    return this.service.update(id, body);
  }

  @CanWrite('sku')
  @Delete(':id')
  deleteSku(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('sku')
  @Patch()
  functionsSku(@Query() whereDto: WhereDto, @Query() functions: FunctionsDto) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }

  @CanWrite('sku')
  @Post(':id/product/:productId')
  setproductToSku(id: number, productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @CanWrite('sku')
  @Post(':id/product')
  unsetproductFromSku(id: number) {
    return this.service.unset(id, 'product');
  }
}
