import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth';

import { Message, MessageView } from './entity';

import { CreateMessageDto, UpdateMessageDto } from './dto';

import { MessageViewService } from './message-view.service';
import { MessageService } from './message.service';

const pubSub = new PubSub();

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly service: MessageService,
    private readonly viewService: MessageViewService
  ) {}

  @CanRead('Message')
  @Query(() => [Message])
  readMessage(
    @Args('paginator') paginatorDto: PaginatorDto<Message | MessageView>,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['message']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @CanRead('Message')
  @Query(() => Message)
  readMessageById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('Message')
  @Mutation(() => Message)
  writeMessage(@Args('message') body: CreateMessageDto) {
    return this.service.save(body);
  }

  @CanWrite('Message')
  @Mutation(() => Boolean)
  updateMessage(
    @Args('id') id: number,
    @Args('message') body: UpdateMessageDto
  ) {
    return this.service.update(id, body);
  }

  @CanWrite('Message')
  @Mutation(() => Boolean)
  deleteMessage(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('Message')
  @Subscription(() => Message)
  onSaveMessage() {
    return pubSub.asyncIterator('savedMessage');
  }
}
