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

import { Message, MessageView } from './entity';
import { CreateMessageDto, UpdateMessageDto } from './dto';

import { MessageViewService } from './message-view.service';
import { MessageService } from './message.service';

@ApiTags('message')
@Controller('message')
export class MessageController {
  constructor(
    private readonly service: MessageService,
    private readonly viewService: MessageViewService
  ) {}
  @CanRead('message')
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

  @CanRead('message')
  @Get(':id')
  readMessageById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy({ id });
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('message')
  @Post()
  writeMessage(@Body() body: CreateMessageDto) {
    return this.service.save(body);
  }

  @CanWrite('message')
  @Put(':id')
  updateMessage(@Param('id') id: number, @Body() body: UpdateMessageDto) {
    return this.service.update(id, body);
  }

  @CanWrite('message')
  @Delete(':id')
  deleteMessage(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('message')
  @Patch()
  functionsMessage(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a function name.');
  }

  @CanWrite('message')
  @Post(':id/receiver/:receiverId')
  setreceiverToMessage(id: number, receiverId: number) {
    return this.service.set(id, receiverId, 'receiver');
  }

  @CanWrite('message')
  @Post(':id/receiver')
  unsetreceiverFromMessage(id: number) {
    return this.service.unset(id, 'receiver');
  }

  @CanWrite('message')
  @Post(':id/sender/:senderId')
  setsenderToMessage(id: number, senderId: number) {
    return this.service.set(id, senderId, 'sender');
  }

  @CanWrite('message')
  @Post(':id/sender')
  unsetsenderFromMessage(id: number) {
    return this.service.unset(id, 'sender');
  }
}
