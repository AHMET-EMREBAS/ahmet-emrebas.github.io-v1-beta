import { BaseEntity } from 'core';
import {
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class Sample extends BaseEntity {
  @Column({ type: 'text', unique: true })
  name: string;
}
