import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
  Length,
} from 'class-validator';
import {
  Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../common/base.entity';

@Entity()
@Exclude()
export class Department extends BaseEntity {
  @Expose()
  @Column({ type: 'text' })
  @Length(3, 20)
  @IsNotEmpty()
  name: string;
}
