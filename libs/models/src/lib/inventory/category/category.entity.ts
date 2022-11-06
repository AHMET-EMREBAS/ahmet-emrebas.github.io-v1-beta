import {
  BaseEntity,
  Col,
} from 'core';
import { Entity } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @Col({
    type: 'string',

    unique: true,
  })
  name: string;
}
