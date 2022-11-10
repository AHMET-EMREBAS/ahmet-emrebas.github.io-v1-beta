import {
  readdirSync,
  readFileSync,
} from 'fs';
import { load } from 'js-yaml';
import {
  camelCase,
  kebabCase,
  snakeCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';

import { Tree } from '@nrwl/devkit';

export type InputType =
  | 'text'
  | 'textarea'
  | 'texteditor'
  | 'number'
  | 'number-range'
  | 'currency'
  | 'currency-range'
  | 'date'
  | 'date-range'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'select-one'
  | 'select-many'
  | 'enum';

export type PropertyType =
  | 'string'
  | 'number'
  | 'enum'
  | 'integer'
  | 'boolean'
  | 'date'
  | 'array'
  | 'object'
  | 'many-to-many'
  | 'many-to-one'
  | 'one-to-many'
  | 'one-to-one';

export interface PropertyOptions {
  name: string;
  type: PropertyType;
  label: string;
  icon: string;
  group: string;
  minLength: number;
  maxLength: number;
  min: number;
  max: number;
  update: boolean;
  query: boolean;
  required: boolean;
  unique: boolean;
  inputElement: InputType;
  from: string;
  isEmail: boolean;
  isPassword: boolean;
}

export interface EntityOptions {
  name: string;
  mainProperty: string;
  properties: PropertyOptions[];
}

export const relationTypes: Readonly<string[]> = [
  'many-to-many',
  'one-to-many',
  'one-to-one',
  'many-to-one',
];

export const atomicTypes: Readonly<string[]> = [
  'string',
  'boolean',
  'Date',
  'number',
];
function isRelationColumn(p: PropertyOptions) {
  return relationTypes.includes(p.type);
}
function notRelationColumn(p: PropertyOptions) {
  return !isRelationColumn(p);
}

function mapName(p: PropertyOptions) {
  return p.name;
}

function appendUtilities(e: PropertyOptions) {
  return {
    ...e,
    upperFirst: (str: string) => upperFirst(camelCase(str)),
    snakeCase: (str: string) => snakeCase(str),
    kebabCase: (str: string) => kebabCase(str),

    valueType: () => {
      if (relationTypes.includes(e.type)) {
        if (e.type.endsWith('many')) {
          return `string[]`;
        }
        return `string`;
      }

      if (atomicTypes.includes(e.type)) {
        return e.type;
      }

      return 'string';
    },

    getValidators: () => {
      const vals = {};

      for (const [key, value] of Object.entries(e)) {
        if (
          [
            'min',
            'max',
            'required',
            'minLength',
            'maxLength',
            'isEmail',
            'isPassword',
            'isUUID',
          ].includes(key)
        ) {
          vals[key] = value;
        }
      }

      if (e.type.endsWith('one')) {
        vals['isNumber'] = true;
      } else if (e.type.endsWith('many')) {
        vals['isNumberArray'] = true;
      }

      return Object.entries(vals)
        .map(([key, value]) => {
          return `${key}: ${value}`;
        })
        .join(',\n');
    },
  };
}

export function getRelationColumnNames(obj: EntityOptions): string[] {
  return obj.properties.filter(isRelationColumn).map(mapName);
}

export function getColumnsNames(obj: EntityOptions): string[] {
  return obj.properties.filter(notRelationColumn).map(mapName);
}

export function getRelationColumns(obj: EntityOptions): PropertyOptions[] {
  return obj.properties.filter(isRelationColumn).map(appendUtilities);
}

export function getColumns(obj: EntityOptions): PropertyOptions[] {
  return obj.properties.filter(notRelationColumn).map(appendUtilities);
}

export function loadMetaData(
  tree: Tree,
  project: string,
  entityName: string
): EntityOptions {
  return load(
    readFileSync(
      join(
        tree.root,
        'projects',
        project,
        'entities',
        [entityName, '.entity.yaml'].join('')
      )
    ).toString()
  ) as EntityOptions;
}

export function getModuleNames(tree: Tree, project) {
  return readdirSync(join(tree.root, 'projects', project, 'entities')).map(
    (e) => e.split('.')[0]
  );
}
