import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsOptional,
  IsPhoneNumber,
  Length,
} from 'class-validator';
import {
  Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../common/base.entity';
import {
  JSONTransformer,
  PasswordTransformer,
} from '../common/transformers';

@Entity()
@Exclude()
export class User extends BaseEntity {
  @Expose()
  @Column({ type: 'text', unique: true })
  @Length(3, 20)
  username: string;

  @Expose()
  @Column({ type: 'text', transformer: PasswordTransformer() })
  @Length(6, 20)
  password: string;

  @Expose()
  @Column({ type: 'text' })
  @Length(4, 6)
  pin: string;

  @Expose()
  @Column({ type: 'text', unique: true, nullable: true })
  @IsOptional()
  @IsPhoneNumber()
  phone: string;

  @Expose()
  @Column({ type: 'text', transformer: JSONTransformer(), nullable: true })
  @IsOptional()
  permissions: Record<string, any>;
}
