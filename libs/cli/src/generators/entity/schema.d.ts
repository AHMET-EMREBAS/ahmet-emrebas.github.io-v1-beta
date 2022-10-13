import { EntitySchemaOptions } from 'typeorm';

export interface EntityGeneratorSchema {
  project: string;
  name: string;
  entity: string;
}
