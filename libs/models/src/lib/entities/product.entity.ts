import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';
import {
  Column,
  DataSource,
  Entity,
  JoinColumn,
  ManyToOne,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

import { BaseEntity } from '../common/base.entity';
import { Category } from './category.entity';
import { Department } from './department.entity';

@Entity()
@Exclude()
export class Product extends BaseEntity {
  @Expose()
  @Column({ type: 'text', unique: true })
  @Length(3, 20)
  @IsNotEmpty()
  name: string;

  @Expose()
  @Column({ type: 'text', unique: true })
  @Length(11, 13)
  @IsNotEmpty()
  barcode: string;

  @ManyToOne(() => Category, { eager: true })
  @Expose()
  @IsOptional()
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Department, { eager: true })
  @Expose()
  @IsOptional()
  @JoinColumn()
  department: Department;
}

@ViewEntity({
  expression: (dataSource: DataSource) =>
    dataSource
      .createQueryBuilder()
      .select('*')
      .addSelect('category.name', 'category')
      .from(Product, 'product')
      .leftJoin(Category, 'category', 'category.id = product.categoryId'),
})
export class ProductView {
  @ViewColumn()
  name: string;

  @ViewColumn()
  code: string;

  @ViewColumn()
  category: string;

  @ViewColumn()
  department: string;
}
