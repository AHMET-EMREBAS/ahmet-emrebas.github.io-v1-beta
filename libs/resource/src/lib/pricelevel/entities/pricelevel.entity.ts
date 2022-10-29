import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Pricelevel extends BaseEntity {
  @Column({ type: 'text', nullable: true }) pricelevel: string;
}
