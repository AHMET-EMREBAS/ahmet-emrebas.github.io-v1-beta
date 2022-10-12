import { BaseEntity } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Todo extends BaseEntity<Todo> {
  @Column({ type: 'text' }) name: string;
}
