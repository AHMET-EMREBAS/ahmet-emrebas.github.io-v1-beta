import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Pricelevel extends BaseEntity<Pricelevel> {
  @Column({ type: 'text', unique: true })
  name: string;
}
