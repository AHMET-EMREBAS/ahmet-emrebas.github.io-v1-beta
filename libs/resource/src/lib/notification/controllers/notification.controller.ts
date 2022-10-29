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
  CreateNotificationDto,
  UpdateNotificationDto,
} from '../dtos';
import { Notification } from '../entities';
import { NotificationService } from '../services/notification.service';

@RestController({
  secure: true,
  resource: 'notification',
})
export class NotificationController {
  constructor(private readonly dataService: NotificationService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateNotificationDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Notification>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateNotificationDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Notification>) {
    return this.dataService.delete(id, query);
  }
}
