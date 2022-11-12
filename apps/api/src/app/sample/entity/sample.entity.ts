import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'sample' })
export class SampleEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text' }) name: string;
}
