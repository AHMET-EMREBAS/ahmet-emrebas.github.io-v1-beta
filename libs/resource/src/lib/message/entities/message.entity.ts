import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Message extends BaseEntity {
  @Column({ type: 'text', nullable: true }) message: string;
}
