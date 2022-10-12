import { BaseEntity } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity<Product> {
  @Column({ type: 'text' }) name: string;
}
