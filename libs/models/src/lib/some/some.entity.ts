import { BaseEntity } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Some extends BaseEntity<Some> {
  @Column({ type: 'text' }) name: string;
}
