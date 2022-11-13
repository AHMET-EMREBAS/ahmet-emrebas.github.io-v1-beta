import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';
import { v4 } from 'uuid';

export class ResourceService<T> {
  constructor(public readonly __repo: Repository<T>) {}

  find(options?: FindManyOptions<T>) {
    try {
      return this.__repo.find(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  findOne(options?: FindOneOptions<T>) {
    try {
      return this.__repo.findOne(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  findOneBy(options?: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneBy(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  findAndCount(options?: FindManyOptions<T>) {
    try {
      return this.__repo.findAndCount(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  findAndCountBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findAndCountBy(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  findBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findBy(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  findOneOrFail(options: FindOneOptions<T>) {
    try {
      return this.__repo.findOneOrFail(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  findOneByOrFail(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneByOrFail(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  create(t: DeepPartial<T>) {
    try {
      return this.__repo.create({ ...t, uuid: v4() });
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  save(t: T) {
    try {
      return this.__repo.save({ ...t, uuid: v4() });
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  update(id: number, updated: QueryDeepPartialEntity<T>) {
    try {
      return this.__repo.update(id, updated);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  delete(id: number) {
    try {
      return this.__repo.delete(id);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  async recover(id: number) {
    try {
      const found = await this.__repo.findOne({
        where: { id } as unknown as FindOptionsWhere<T>,
        withDeleted: true,
      });
      return await this.__repo.recover(found);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  count(options?: FindManyOptions<T>) {
    try {
      return this.__repo.count(options);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  softDelete(id: number) {
    try {
      return this.__repo.softDelete(id);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  add(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .add(relationId);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  set(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(relationId);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  unset(id: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(null);
    } catch (err) {
      //   Ignore error
    }
    return;
  }

  remove(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .remove(relationId);
    } catch (err) {
      //   Ignore error
    }
    return;
  }
}
