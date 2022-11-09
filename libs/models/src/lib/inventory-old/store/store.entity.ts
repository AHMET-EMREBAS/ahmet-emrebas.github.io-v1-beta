import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToOne,
} from 'typeorm';

import { Pricelevel } from '../pricelevel';

@Entity()
export class Store extends BaseEntity {
  @Col({
    type: 'string',

    unique: true,
  })
  name: string;

  @ManyToOne(() => Pricelevel)
  @JoinColumn()
  pricelevel: Pricelevel;
}
