import {
  Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../entity';

@Entity()
export class Logger extends BaseEntity {
  @Column({ type: 'text' })
  context: string;

  @Column({ type: 'text' })
  message: string;
}
