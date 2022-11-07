import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Pricelevel extends BaseEntity {
  @Col({
    type: 'string',

    unique: true,
  })
  name: string;
}
