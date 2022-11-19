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
  Message,
  MessageView,
  CreateMessageDto,
  UpdateMessageDto,
} from '../../models/message';

import { MessageViewService } from './message-view.service';
import { MessageService } from './message.service';

@ApiTags('message')
@Controller('message')
export class MessageController {
  constructor(
    private readonly service: MessageService,
    private readonly viewService: MessageViewService
  ) {}

  @Get()
  readMessage(
    @Query() paginatorDto: PaginatorDto<Message | MessageView>,
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
  readMessageById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writeMessage(@Body() body: CreateMessageDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updateMessage(@Param('id') id: number, @Body() body: UpdateMessageDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteMessage(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Patch()
  functionsMessage(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }

  @Post(':id/to/:toId')
  settoToMessage(id: number, toId: number) {
    return this.service.set(id, toId, 'to');
  }

  @Post(':id/to')
  unsettoFromMessage(id: number) {
    return this.service.unset(id, 'to');
  }

  @Post(':id/from/:fromId')
  setfromToMessage(id: number, fromId: number) {
    return this.service.set(id, fromId, 'from');
  }

  @Post(':id/from')
  unsetfromFromMessage(id: number) {
    return this.service.unset(id, 'from');
  }
}
