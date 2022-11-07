import { Column } from 'typeorm';

export interface ColumnOptions {
  type: 'string' | 'int' | 'decimal' | 'date' | 'enum' | 'boolean' | 'number';
  nullable: boolean;
  unique: boolean;
}

const dbType = process.env.DATABASE_TYPE;

const SQLiteMap = {
  int: 'int',
  string: 'text',
  number: 'int',
  decimal: 'numeric',
  date: 'date',
  enum: 'enum',
  boolean: 'boolean',
};

const PostgresMap = {
  int: 'number',
  string: 'text',
  number: 'number',
  decimal: 'numeric',
  date: 'date',
  enum: 'enum',
  boolean: 'boolean',
};

const DatabaseTypes = {
  sqlite: SQLiteMap,
  postgres: PostgresMap,
};

const DB = DatabaseTypes[dbType] || SQLiteMap;

export function Col(options: Partial<ColumnOptions>) {
  return Column({
    type: DB[options.type] || 'text',
    unique: !!options.unique,
    nullable: !!options.nullable,
  });
}
