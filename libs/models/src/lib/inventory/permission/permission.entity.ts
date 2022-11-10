import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';

import { Resource } from '../resource';

@Entity()
export class Permission extends BaseEntity {
  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  permission: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  operation: string;

  @ManyToOne(() => Resource)
  @JoinColumn()
  resource: Resource;
}
