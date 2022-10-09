import {
  CommonFields,
  IUser,
} from 'commonjs';
import {
  EntitySchema,
  EntitySchemaColumnOptions,
  EntitySchemaOptions,
} from 'typeorm';

export const UserEntityOptions: EntitySchemaOptions<IUser & CommonFields> = {
  name: 'User',
  columns: {
    id: {
      type: 'int',
      generated: true,
      primary: true,
    },
    username: {
      type: 'text',
      inputMode: 'email',

      unique: true,
    } as HTMLInputElement & EntitySchemaColumnOptions,
    password: {
      type: 'text',
      inputMode: 'password',
    } as HTMLInputElement & EntitySchemaColumnOptions,
    permissions: {
      type: 'text',
      inputMode: 'permissions',
      transformer: {
        to: (value: any) => value && JSON.stringify(value),
        from: (value) => value,
      },
    } as HTMLInputElement & EntitySchemaColumnOptions,
  },
};
export const UserEntity = new EntitySchema(UserEntityOptions);
