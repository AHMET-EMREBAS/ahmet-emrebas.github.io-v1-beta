import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { RelationType } from 'typeorm/metadata/types/RelationTypes';

import { applyDecorators } from '@nestjs/common';

const relationMap = {
  'many-to-many': (type: any) =>
    applyDecorators(
      ManyToMany(() => type, { nullable: true }),
      JoinTable()
    ),
  'many-to-one': (type: any) =>
    applyDecorators(
      ManyToOne(() => type, { eager: true, nullable: true }),
      JoinColumn()
    ),
  'one-to-many': (type: any) =>
    applyDecorators(
      OneToMany(
        () => type,
        (o: any) => o['id'],
        {
          nullable: true,
        }
      ),
      JoinTable()
    ),
  'one-to-one': (type: any) =>
    applyDecorators(
      OneToOne(() => type, { eager: true, nullable: true }),
      JoinColumn()
    ),
};

export function Relation(r: RelationType, type: any) {
  return applyDecorators(relationMap[r](type));
}
