import { IUser } from './user.interface';

export abstract class AuthUserService<T extends IUser> {
  findByUsername(username: string): Promise<T> {
    throw new Error('Not Implemented');
  }
}
