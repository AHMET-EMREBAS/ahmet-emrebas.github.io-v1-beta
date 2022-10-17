import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ColumnType } from 'typeorm';

@Exclude()
export class ColumnOptionsDTO {
  /**
   * Column type. Must be one of the value from the ColumnTypes class.
   */
  @Expose()
  @IsString()
  @IsNotEmpty()
  type?: ColumnType;

  /**
   * Column name in the database.
   */
  @Expose()
  @IsString()
  @IsOptional()
  name?: string;
  /**
   * Column type's length. Used only on some column types.
   * For example type = "string" and length = "100" means that ORM will create a column with type varchar(100).
   */
  @Expose()
  @IsOptional()
  @IsNumber()
  length?: string | number;
  /**
   * Column type's display width. Used only on some column types in MySQL.
   * For example, INT(4) specifies an INT with a display width of four digits.
   */
  @Expose()
  @IsOptional()
  @IsNumber()
  width?: number;
  /**
   * Indicates if column's value can be set to NULL.
   * Default value is "false".
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  nullable?: boolean;
  /**
   * Indicates if column value is not updated by "save" operation.
   * It means you'll be able to write this value only when you first time insert the object.
   * Default value is "false".
   *
   * @deprecated Please use the `update` option instead.  Careful, it takes
   * the opposite value to readonly.
   *
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  readonly?: boolean;
  /**
   * Indicates if column value is updated by "save" operation.
   * If false, you'll be able to write this value only when you first time insert the object.
   * Default value is "true".
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  update?: boolean;
  /**
   * Indicates if column is always selected by QueryBuilder and find operations.
   * Default value is "true".
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  select?: boolean;
  /**
   * Indicates if column is inserted by default.
   * Default value is "true".
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  insert?: boolean;
  /**
   * Default database value.
   */
  @Expose()
  @IsOptional()
  default?: any;
  /**
   * ON UPDATE trigger. Works only for MySQL.
   */
  @Expose()
  @IsOptional()
  @IsString()
  onUpdate?: string;
  /**
   * Indicates if this column is a primary key.
   * Same can be achieved when @PrimaryColumn decorator is used.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  primary?: boolean;
  /**
   * Specifies if column's value must be unique or not.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  unique?: boolean;
  /**
   * Column comment. Not supported by all database types.
   */
  @Expose()
  @IsOptional()
  @IsString()
  comment?: string;
  /**
   * The precision for a decimal (exact numeric) column (applies only for decimal column), which is the maximum
   * number of digits that are stored for the values.
   */
  @Expose()
  @IsOptional()
  @IsNumber()
  precision?: number | null;
  /**
   * The scale for a decimal (exact numeric) column (applies only for decimal column), which represents the number
   * of digits to the right of the decimal point and must not be greater than precision.
   */
  @Expose()
  @IsOptional()
  @IsNumber()
  scale?: number;
  /**
   * Puts ZEROFILL attribute on to numeric column. Works only for MySQL.
   * If you specify ZEROFILL for a numeric column, MySQL automatically adds the UNSIGNED attribute to this column
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  zerofill?: boolean;
  /**
   * Puts UNSIGNED attribute on to numeric column. Works only for MySQL.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  unsigned?: boolean;
  /**
   * Defines a column character set.
   * Not supported by all database types.
   */
  @Expose()
  @IsOptional()
  @IsString()
  charset?: string;
  /**
   * Defines a column collation.
   */
  @Expose()
  @IsOptional()
  @IsString()
  collation?: string;
  /**
   * Array of possible enumerated values.
   */
  @Expose()
  @IsOptional()
  enum?: (string | number)[] | Record<string, any>;
  /**
   * Exact name of enum
   */
  @Expose()
  @IsOptional()
  @IsString()
  enumName?: string;
  /**
   * If this column is primary key then this specifies the name for it.
   */
  @Expose()
  @IsOptional()
  @IsString()
  primaryKeyConstraintName?: string;
  /**
   * If this column is foreign key then this specifies the name for it.
   */
  @Expose()
  @IsOptional()
  @IsString()
  foreignKeyConstraintName?: string;
  /**
   * Generated column expression.
   */
  @Expose()
  @IsOptional()
  @IsString()
  asExpression?: string;
  /**
   * Generated column type.
   */
  @Expose()
  @IsOptional()
  @IsIn(['VIRTUAL', 'STORED'])
  generatedType?: 'VIRTUAL' | 'STORED';
  /**
   * Identity column type. Supports only in Postgres 10+.
   */
  @Expose()
  @IsOptional()
  @IsIn(['ALWAYS', 'BY DEFAULT'])
  generatedIdentity?: 'ALWAYS' | 'BY DEFAULT';
  /**
   * Return type of HSTORE column.
   * Returns value as string or as object.
   */
  @Expose()
  @IsOptional()
  @IsIn(['object', 'string'])
  hstoreType?: 'object' | 'string';
  /**
   * Indicates if this column is an array.
   * Can be simply set to true or array length can be specified.
   * Supported only by postgres.
   */
  @Expose()
  @IsOptional()
  @IsBoolean()
  array?: boolean;
  /**
   * Specifies a value transformer that is to be used to (un)marshal
   * this column when reading or writing to the database.
   */
  @Expose()
  @IsOptional()
  @IsIn(['json', 'password'])
  transformer?: string;
  /**
   * Spatial Feature Type (Geometry, Point, Polygon, etc.)
   */
  @Expose()
  @IsOptional()
  @IsString()
  spatialFeatureType?: string;
  /**
   * SRID (Spatial Reference ID (EPSG code))
   */
  @Expose()
  @IsOptional()
  @IsNumber()
  srid?: number;
}
