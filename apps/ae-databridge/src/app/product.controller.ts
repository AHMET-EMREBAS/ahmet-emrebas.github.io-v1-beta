import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';

import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'text' }) name: string;
}

@Controller('product')
export class ProductController {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>
  ) {}

  @Get()
  readProduct() {
    return this.repo.find();
  }

  @Get('create')
  create(@Query('name') name: string) {
    return this.repo.save({ name });
  }
}
