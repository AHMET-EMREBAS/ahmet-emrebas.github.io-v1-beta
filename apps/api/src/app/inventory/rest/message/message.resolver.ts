import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import {
  Message,
  MessageView,
  CreateMessageDto,
  UpdateMessageDto,
} from '../../models/message';

import { MessageViewService } from './message-view.service';
import { MessageService } from './message.service';

const pubSub = new PubSub();

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly service: MessageService,
    private readonly viewService: MessageViewService
  ) {}

  @Query(() => [Message])
  readMessage(
    @Args('paginator') paginatorDto: PaginatorDto,
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

  @Query(() => Message)
  readMessageById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Message)
  writeMessage(@Args('message') body: CreateMessageDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updateMessage(
    @Args('id') id: number,
    @Args('message') body: UpdateMessageDto
  ) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deleteMessage(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Message)
  onSaveMessage() {
    return pubSub.asyncIterator('savedMessage');
  }
}
