import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { DeferrableType } from 'typeorm/metadata/types/DeferrableType';
import { OnDeleteType } from 'typeorm/metadata/types/OnDeleteType';
import { OnUpdateType } from 'typeorm/metadata/types/OnUpdateType';
import { RelationType } from 'typeorm/metadata/types/RelationTypes';

@Exclude()
export class RelationOptionsDTO {
  /**
   * Indicates with which entity this relation is made.
   */
  @Expose()
  @IsNotEmpty()
  @IsString()
  target: string;
  /**
   * Type of relation. Can be one of the value of the RelationTypes class.
   */
  @Expose()
  @IsNotEmpty()
  @IsIn(['one-to-one', 'one-to-many', 'many-to-one', 'many-to-many'])
  type: RelationType;
  /**
   * Inverse side of the relation.
   */
  @Expose()
  @IsOptional()
  @IsString()
  inverseSide?: string;
  /**
   * Indicates if this relation will be lazily loaded.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  lazy?: boolean;
  /**
   * Indicates if this relation will be eagerly loaded.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  eager?: boolean;
  /**
   * Indicates if persistence is enabled for the relation.
   * By default its enabled, but if you want to avoid any changes in the relation to be reflected in the database you can disable it.
   * If its disabled you can only change a relation from inverse side of a relation or using relation query builder functionality.
   * This is useful for performance optimization since its disabling avoid multiple extra queries during entity save.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  persistence?: boolean;
  /**
   * Indicates if this relation will be a primary key.
   * Can be used only for many-to-one and owner one-to-one relations.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  primary?: boolean;
  /**
   * Indicates whether foreign key constraints will be created for join columns.
   * Can be used only for many-to-one and owner one-to-one relations.
   * Defaults to true.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  createForeignKeyConstraints?: boolean;
  /**
   * Join table options of this column. If set to true then it simply means that it has a join table.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  joinTable?: boolean;
  /**
   * Join column options of this column. If set to true then it simply means that it has a join column.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  joinColumn?: boolean;
  /**
   * Indicates if this is a parent (can be only many-to-one relation) relation in the tree tables.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  treeParent?: boolean;
  /**
   * Indicates if this is a children (can be only one-to-many relation) relation in the tree tables.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  treeChildren?: boolean;
  /**
   * If set to true then it means that related object can be allowed to be inserted / updated / removed to the db.
   * This is option a shortcut if you would like to set cascadeInsert, cascadeUpdate and cascadeRemove to true.
   */
  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @IsIn(['insert', 'update', 'remove', 'soft-remove', 'recover'])
  cascade?: ('insert' | 'update' | 'remove' | 'soft-remove' | 'recover')[];
  /**
   * Default database value.
   */
  @Expose()
  @IsOptional()
  default?: any;
  /**
   * Indicates if relation column value can be nullable or not.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  nullable?: boolean;
  /**
   * Database cascade action on delete.
   */
  @Expose()
  @IsString()
  @IsIn(['RESTRICT', 'CASCADE', 'SET NULL', 'DEFAULT', 'NO ACTION'])
  @IsOptional()
  onDelete?: OnDeleteType;
  /**
   * Database cascade action on update.
   */
  @Expose()
  @IsString()
  @IsIn(['RESTRICT', 'CASCADE', 'SET NULL', 'DEFAULT', 'NO ACTION'])
  @IsOptional()
  onUpdate?: OnUpdateType;
  /**
   * Indicate if foreign key constraints can be deferred. "INITIALLY IMMEDIATE" | "INITIALLY DEFERRED"
   */
  @Expose()
  @IsString()
  @IsIn(['INITIALLY IMMEDIATE', 'INITIALLY DEFERRED'])
  @IsOptional()
  deferrable?: DeferrableType;
  /**
   * When a parent is saved (with cascading but) without a child row that still exists in database, this will control what shall happen to them.
   * delete will remove these rows from database. nullify will remove the relation key.
   * skip will keep the relation intact. Removal of related item is only possible through its own repo.
   */
  @Expose()
  @IsString()
  @IsIn(['nullify', 'delete', 'soft-delete', 'disable'])
  @IsOptional()
  orphanedRowAction?: 'nullify' | 'delete' | 'soft-delete' | 'disable';
}
