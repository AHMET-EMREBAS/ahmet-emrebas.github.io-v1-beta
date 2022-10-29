import {
  DeleteReq,
  GetReq,
  GetReqById,
  IDParam,
  PostReq,
  QueryDTO,
  ReqBody,
  ReqQuery,
  RestController,
  UpdateReq,
} from 'core';

import { Query } from '@nestjs/common';

import {
  CreateMessageDto,
  UpdateMessageDto,
} from '../dtos';
import { Message } from '../entities';
import { MessageService } from '../services/message.service';

@RestController({
  secure: true,
  resource: 'message',
})
export class MessageController {
  constructor(private readonly dataService: MessageService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateMessageDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Message>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateMessageDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Message>) {
    return this.dataService.delete(id, query);
  }
}
