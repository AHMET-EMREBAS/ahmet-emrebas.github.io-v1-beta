import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Customer,
  CustomerView,
} from '../entities';

@Injectable()
export class CustomerService extends ResourceService<Customer, CustomerView> {
  constructor(
    @InjectRepository(Customer) repo: Repository<Customer>,
    @InjectRepository(CustomerView) viewRepo: Repository<CustomerView>
  ) {
    super(repo, viewRepo);
  }
}
