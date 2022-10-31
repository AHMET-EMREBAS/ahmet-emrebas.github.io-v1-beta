import {
  genSaltSync,
  hashSync,
} from 'bcrypt';
import {
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Sub {
  @PrimaryGeneratedColumn() id: number;

  @Column({
    generated: 'uuid',
    unique: true,
    update: false,
  })
  uuid: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({
    type: 'text',
    transformer: {
      to: (value) => (value = hashSync(value, genSaltSync(8))),
      from: (value) => value,
    },
  })
  password: string;
}
