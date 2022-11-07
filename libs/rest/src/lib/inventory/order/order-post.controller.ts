import { GetPostController, ManagePermission } from 'core';
import { CreateOrderDto, UpdateOrderDTO } from 'models/inventory/order';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrderNames } from './order.names';
import { OrderService } from './order.service';

@ApiTags('[ Post / Update ] Order')
@ManagePermission(OrderNames.SINGULAR_NAME)
@Controller(OrderNames.SINGULAR_NAME)
export class OrderPostController extends GetPostController(
  OrderNames.SINGULAR_NAME,
  CreateOrderDto,
  UpdateOrderDTO
) {
  constructor(private readonly service: OrderService) {
    super(service);
  }
}
