import {
  BaseEntity,
  Col,
} from 'core';
import {
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { Sub } from '../sub';

@Entity()
export class Sample extends BaseEntity {
  @Col({
    type: 'string',

    unique: true,
  })
  name: string;

  @Col({
    type: 'string',
  })
  description: string;

  @ManyToOne(() => Sub)
  @JoinColumn()
  sub: Sub;
}
