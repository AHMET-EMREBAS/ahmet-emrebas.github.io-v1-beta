import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
  Length,
} from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '../common/base.entity';
import { Product } from './product.entity';

@Entity()
@Exclude()
export class Sku extends BaseEntity {
  @Expose()
  @Column({ type: 'text', unique: true })
  @Length(3, 20)
  @IsNotEmpty()
  sku: string;

  @Expose()
  @Column({ type: 'text', unique: true })
  @Length(11, 13)
  @IsNotEmpty()
  barcode: string;

  @Expose()
  @ManyToOne(() => Product, { eager: true })
  @JoinColumn()
  product: Product;
}
