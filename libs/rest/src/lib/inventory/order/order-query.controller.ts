import { GetQueryController, ManagePermission } from 'core';
import { Order, OrderView } from 'models/inventory/order';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrderNames } from './order.names';
import { OrderService } from './order.service';

@ApiTags('[ Query / Relation ] Order')
@ManagePermission(OrderNames.SINGULAR_NAME)
@Controller(OrderNames.SINGULAR_NAME)
export class OrderQueryController extends GetQueryController<Order, OrderView>(
  OrderNames.SINGULAR_NAME
) {
  constructor(service: OrderService) {
    super(service);
  }
}
