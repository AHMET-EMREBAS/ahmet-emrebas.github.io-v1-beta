import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Employee extends BaseEntity {
  @Column({ type: 'text', nullable: true }) employee: string;
}
