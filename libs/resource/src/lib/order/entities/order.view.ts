import { CanBe } from 'core';
import {
  DataSource,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('order', 'order');
  },
})
export class OrderView {
  @ViewColumn() id: number;
  @ViewColumn() order: string;

  @ViewColumn() createdAt?: Date;
  @ViewColumn() udpatedAt?: Date;
  @ViewColumn() deletedAt?: Date;

  @ViewColumn() createdBy?: number;
  @ViewColumn() updatedBy?: number;
  @ViewColumn() deletedBy?: number;
  @ViewColumn() lastSeenBy?: number;
  @ViewColumn() viewCount?: number;
  @ViewColumn() accessible?: CanBe;
}
