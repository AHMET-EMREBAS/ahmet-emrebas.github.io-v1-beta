import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Video extends BaseEntity {
  @Column({ type: 'text', nullable: true }) video: string;
}
