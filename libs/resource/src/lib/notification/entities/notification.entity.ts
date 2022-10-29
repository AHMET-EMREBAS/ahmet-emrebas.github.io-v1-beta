import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Notification extends BaseEntity {
  @Column({ type: 'text', nullable: true }) notification: string;
}
