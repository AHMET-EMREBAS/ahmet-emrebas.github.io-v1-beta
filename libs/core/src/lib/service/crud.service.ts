import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';

export class CrudService<T> {
  constructor(private readonly __repo: Repository<T>) {}

  find(options?: FindManyOptions<T>) {
    try {
      return this.__repo.find(options);
    } catch (err) {
      console.error(err);
    }
  }

  findOne(options?: FindOneOptions) {
    try {
      return this.__repo.findOne(options);
    } catch (err) {
      console.error(err);
    }
  }

  findOneBy(options?: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneBy(options);
    } catch (err) {
      console.error(err);
    }
  }

  findAndCount(options?: FindManyOptions<T>) {
    try {
      return this.__repo.findAndCount(options);
    } catch (err) {
      console.error(err);
    }
  }

  findAndCountBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findAndCountBy(options);
    } catch (err) {
      console.error(err);
    }
  }

  findBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findBy(options);
    } catch (err) {
      console.error(err);
    }
  }

  findOneOrFail(options: FindOneOptions<T>) {
    try {
      return this.__repo.findOneOrFail(options);
    } catch (err) {
      console.error(err);
    }
  }

  findOneByOrFail(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneByOrFail(options);
    } catch (err) {
      console.error(err);
    }
  }

  create(t: T) {
    try {
      return this.__repo.create(t);
    } catch (err) {
      console.error(err);
    }
  }

  save(t: T) {
    try {
      return this.__repo.save(t);
    } catch (err) {
      console.error(err);
    }
  }

  update(id: number, updated: QueryDeepPartialEntity<T>) {
    try {
      return this.__repo.update(id, updated);
    } catch (err) {
      console.error(err);
    }
  }

  delete(id: number) {
    try {
      return this.__repo.delete(id);
    } catch (err) {
      console.error(err);
    }
  }

  softDelete(id: number) {
    try {
      return this.__repo.softDelete(id);
    } catch (err) {
      console.error(err);
    }
  }

  add(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .add(relationId);
    } catch (err) {
      console.error(err);
    }
  }

  set(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(relationId);
    } catch (err) {
      console.error(err);
    }
  }

  unset(id: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(null);
    } catch (err) {
      console.error(err);
    }
  }

  remove(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .remove(relationId);
    } catch (err) {
      console.error(err);
    }
  }
}
