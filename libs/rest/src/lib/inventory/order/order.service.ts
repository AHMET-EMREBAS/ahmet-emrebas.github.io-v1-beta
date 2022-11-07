import { CrudService } from 'core';
import { Order, OrderView } from 'models/inventory/order';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService extends CrudService<Order, OrderView> {
  constructor(
    @InjectRepository(Order) mainRepo: Repository<Order>,
    @InjectRepository(OrderView) viewRepo: Repository<OrderView>
  ) {
    super(mainRepo, viewRepo);
  }
}
