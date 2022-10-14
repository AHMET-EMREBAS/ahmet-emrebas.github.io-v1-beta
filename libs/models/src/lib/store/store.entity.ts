import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

import { Pricelevel } from '../pricelevel';

@Entity()
export class Store extends BaseEntity<Store> {
  @Column({ type: 'text', unique: true })
  name: string;

  @Relation('many-to-one', Pricelevel)
  pricelevel: Pricelevel;
}
