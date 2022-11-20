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

import { Store, StoreView } from './entity';
import { CreateStoreDto, UpdateStoreDto } from './dto';

import { StoreViewService } from './store-view.service';
import { StoreService } from './store.service';

@ApiTags('store')
@Controller('store')
export class StoreController {
  constructor(
    private readonly service: StoreService,
    private readonly viewService: StoreViewService
  ) {}
  @CanRead('store')
  @Get()
  readStore(
    @Query() paginatorDto: PaginatorDto<Store | StoreView>,
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

  @CanRead('store')
  @Get(':id')
  readStoreById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('store')
  @Post()
  writeStore(@Body() body: CreateStoreDto) {
    return this.service.save(body);
  }

  @CanWrite('store')
  @Put(':id')
  updateStore(@Param('id') id: number, @Body() body: UpdateStoreDto) {
    return this.service.update(id, body);
  }

  @CanWrite('store')
  @Delete(':id')
  deleteStore(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('store')
  @Patch()
  functionsStore(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }

  @CanWrite('store')
  @Post(':id/pricelevel/:pricelevelId')
  setpricelevelToStore(id: number, pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @CanWrite('store')
  @Post(':id/pricelevel')
  unsetpricelevelFromStore(id: number) {
    return this.service.unset(id, 'pricelevel');
  }
}
