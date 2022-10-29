import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Article extends BaseEntity {
  @Column({ type: 'text', nullable: true }) article: string;
}
