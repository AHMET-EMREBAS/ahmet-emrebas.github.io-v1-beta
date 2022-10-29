import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Sample extends BaseEntity {
  @Column({ type: 'text', nullable: true }) sample: string;
}
