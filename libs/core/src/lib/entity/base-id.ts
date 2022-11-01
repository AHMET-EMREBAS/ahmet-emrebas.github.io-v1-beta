import {
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class BaseID {
  @PrimaryColumn({ generated: true, type: 'uuid' }) __uuid: string;

  @PrimaryGeneratedColumn() id: number;
}
