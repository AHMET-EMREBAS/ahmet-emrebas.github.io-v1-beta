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

import { User, UserView } from './entity';
import { CreateUserDto, UpdateUserDto } from './dto';

import { UserViewService } from './user-view.service';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly service: UserService,
    private readonly viewService: UserViewService
  ) {}
  @CanRead('user')
  @Get()
  readUser(
    @Query() paginatorDto: PaginatorDto<User | UserView>,
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

  @CanRead('user')
  @Get(':id')
  readUserById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy({ id });
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('user')
  @Post()
  writeUser(@Body() body: CreateUserDto) {
    return this.service.save(body);
  }

  @CanWrite('user')
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() body: UpdateUserDto) {
    return this.service.update(id, body);
  }

  @CanWrite('user')
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('user')
  @Patch()
  functionsUser(@Query() whereDto: WhereDto, @Query() functions: FunctionsDto) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a function name.');
  }

  @CanWrite('user')
  @Post(':id/permission/:rid')
  addpermissionToUser(id: number, rid: number) {
    return this.service.add(id, rid, 'permission');
  }

  @CanWrite('user')
  @Post(':id/permission/:rid')
  removepermissionFromUser(id: number, rid: number) {
    return this.service.remove(id, rid, 'permission');
  }
}
