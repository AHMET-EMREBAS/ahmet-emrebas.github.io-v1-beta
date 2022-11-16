import { IUser } from './user.interface';

import { IReadPermission } from '../permission';

export type IReadUser = IUser<IReadPermission[]>;
