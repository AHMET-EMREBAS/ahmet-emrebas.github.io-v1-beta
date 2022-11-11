import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RESOUCE_NAME } from '../names';

@Entity({ name: RESOUCE_NAME })
export class Model {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text' }) name: string;
}
