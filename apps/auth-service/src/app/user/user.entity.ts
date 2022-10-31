import {
  genSaltSync,
  hashSync,
} from 'bcrypt';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({
    generated: 'uuid',
    unique: true,
    update: false,
  })
  uuid: string;

  @Column({ type: 'text' })
  username: string;

  @Column({
    type: 'text',
    transformer: {
      to: (value) => (value = hashSync(value, genSaltSync(8))),
      from: (value) => value,
    },
  })
  password: string;

  @Column({ type: 'text' })
  organization: string;

  @Column({ type: 'text' })
  permisstion: string;
}
