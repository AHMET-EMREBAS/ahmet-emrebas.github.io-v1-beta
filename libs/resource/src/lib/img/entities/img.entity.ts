import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Img extends BaseEntity {
  @Column({ type: 'text', nullable: true }) img: string;
}
