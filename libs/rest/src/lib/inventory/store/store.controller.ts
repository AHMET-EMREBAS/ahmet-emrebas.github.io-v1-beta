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

import { CreateStoreDto, UpdateStoreDto } from 'models/inventory/store';

import { StoreViewService } from './store-view.service';
import { StoreService } from './store.service';

@ApiTags('store')
@Controller('store')
export class StoreController {
  constructor(
    private readonly service: StoreService,
    private readonly viewService: StoreViewService
  ) {}

  @Get()
  readStore(
    @Query() paginatorDto: PaginatorDto,
    @Query() viewDto: ViewDto,
    @Query() query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['name']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Get(':id')
  readStoreById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writeStore(@Body() body: CreateStoreDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updateStore(@Param('id') id: number, @Body() body: UpdateStoreDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteStore(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Post(':id/pricelevel/:pricelevelId')
  setpricelevelToStore(id: number, pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Post(':id/pricelevel')
  unsetpricelevelFromStore(id: number) {
    return this.service.unset(id, 'pricelevel');
  }
}
