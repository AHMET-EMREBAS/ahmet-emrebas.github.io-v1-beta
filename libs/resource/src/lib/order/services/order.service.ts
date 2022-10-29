import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Order,
  OrderView,
} from '../entities';

@Injectable()
export class OrderService extends ResourceService<Order, OrderView> {
  constructor(
    @InjectRepository(Order) repo: Repository<Order>,
    @InjectRepository(OrderView) viewRepo: Repository<OrderView>
  ) {
    super(repo, viewRepo);
  }
}
