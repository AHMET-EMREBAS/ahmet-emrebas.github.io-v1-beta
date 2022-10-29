import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Email extends BaseEntity {
  @Column({ type: 'text', nullable: true }) email: string;
}
