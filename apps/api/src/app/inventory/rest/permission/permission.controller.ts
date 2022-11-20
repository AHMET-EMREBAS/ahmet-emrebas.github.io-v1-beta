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

import { CanRead, CanWrite } from '../../auth';

import { Permission, PermissionView } from './entity';
import { CreatePermissionDto, UpdatePermissionDto } from './dto';

import { PermissionViewService } from './permission-view.service';
import { PermissionService } from './permission.service';

@ApiTags('permission')
@Controller('permission')
export class PermissionController {
  constructor(
    private readonly service: PermissionService,
    private readonly viewService: PermissionViewService
  ) {}
  @CanRead('permission')
  @Get()
  readPermission(
    @Query() paginatorDto: PaginatorDto<Permission | PermissionView>,
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

  @CanRead('permission')
  @Get(':id')
  readPermissionById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('permission')
  @Post()
  writePermission(@Body() body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @CanWrite('permission')
  @Put(':id')
  updatePermission(@Param('id') id: number, @Body() body: UpdatePermissionDto) {
    return this.service.update(id, body);
  }

  @CanWrite('permission')
  @Delete(':id')
  deletePermission(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('permission')
  @Patch()
  functionsPermission(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }
}
