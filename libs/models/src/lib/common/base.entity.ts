import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { JSONTransformer } from './transformers';

export class BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Expose()
  @Column({ type: 'text', nullable: true, transformer: JSONTransformer() })
  @IsOptional()
  details: Record<string, any>;

  @Expose()
  @Column({ type: 'boolean', default: true })
  @IsOptional()
  active: boolean;
}
