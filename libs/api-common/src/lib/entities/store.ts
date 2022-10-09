import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IPriceLevel,
  IStore,
  IUser,
} from 'commonjs';
import {
  Column,
  DataSource,
  Entity,
  JoinColumn,
  ManyToOne,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

import { Property } from '../property';
import { BaseEntity } from './base.entity';
import { PriceLevel } from './price-level';

@Entity()
@Exclude()
export class Store extends BaseEntity implements IStore {
  @Expose()
  @Property({
    type: 'number',
    inputType: 'select-one',
    selectFrom: 'pricelevel',
    selectLabelProperty: 'name',
    selectValueProperty: 'id',
    required: false,
  })
  @ManyToOne(() => PriceLevel, {
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  priceLevel: IPriceLevel;

  @Expose()
  @Property({
    type: 'string',
    inputType: 'text',
    minLength: 3,
    maxLength: 50,
    unique: true,
  })
  @Column({ type: 'text', unique: true })
  name: string;
}

@ViewEntity({
  expression: (dataSource: DataSource) =>
    dataSource
      .createQueryBuilder()
      .select('*')
      .addSelect('priceLevel.name', 'priceLevel')
      .from(Store, 'store')
      .leftJoin(PriceLevel, 'priceLevel', 'priceLevel.id = store.priceLevel'),
})
export class StoreView implements Store {
  @ViewColumn() id: number;
  @ViewColumn() name: string;
  @ViewColumn() createdAt?: Date;
  @ViewColumn() updatedAt?: Date;
  @ViewColumn() deletedAt?: Date;
  @ViewColumn() createdBy?: IUser;
  @ViewColumn() updatedBy?: IUser;
  @ViewColumn() deletedBy?: IUser;
  @ViewColumn() owner?: IUser;
  @ViewColumn() active?: boolean;
  @ViewColumn() priceLevel: IPriceLevel;
}
