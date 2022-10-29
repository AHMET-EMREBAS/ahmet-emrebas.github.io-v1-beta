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
  CreateOrderDto,
  UpdateOrderDto,
} from '../dtos';
import { Order } from '../entities';
import { OrderService } from '../services/order.service';

@RestController({
  secure: true,
  resource: 'order',
})
export class OrderController {
  constructor(private readonly dataService: OrderService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateOrderDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Order>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateOrderDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Order>) {
    return this.dataService.delete(id, query);
  }
}
