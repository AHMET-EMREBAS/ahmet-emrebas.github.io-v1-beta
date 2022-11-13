import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

export class ResourceViewService<T> {
  constructor(public readonly __repo: Repository<T>) {}

  find(options?: FindManyOptions<T>) {
    try {
      return this.__repo.find(options);
    } catch (err) {
      // Ignore error
    }
    return;
  }

  findOne(options?: FindOneOptions<T>) {
    try {
      return this.__repo.findOne(options);
    } catch (err) {
      // Ignore error
    }
    return;
  }

  findOneBy(options?: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneBy(options);
    } catch (err) {
      // Ignore error
    }
    return;
  }
}
