import { BaseEntity } from 'api-core';
import {
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class Sample extends BaseEntity {
  @Column({ type: 'text' })
  name: string;
}
