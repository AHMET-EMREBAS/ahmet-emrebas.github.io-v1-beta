import {
  BaseEntity,
  Col,
} from 'core';
import { Entity } from 'typeorm';

@Entity()
export class Sample extends BaseEntity {
  @Col({
    type: 'string',

    unique: true,
  })
  name: string;
}
