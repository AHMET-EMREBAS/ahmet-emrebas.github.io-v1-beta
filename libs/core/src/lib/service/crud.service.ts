import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';
import { v4 } from 'uuid';

import { Logger } from '@nestjs/common';

export class CrudService<T, V = any> {
  private readonly logger: Logger;
  public readonly viewService: CrudService<V>;
  constructor(
    public readonly __repo: Repository<T>,
    __repoView?: Repository<V>
  ) {
    if (__repoView) {
      this.viewService = new CrudService(__repoView);
    }

    this.logger = new Logger(this.__repo.metadata.tableName + 'Repository');
  }

  find(options?: FindManyOptions<T>) {
    try {
      return this.__repo.find(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  findOne(options?: FindOneOptions) {
    try {
      return this.__repo.findOne(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  findOneBy(options?: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneBy(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  findAndCount(options?: FindManyOptions<T>) {
    try {
      return this.__repo.findAndCount(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  findAndCountBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findAndCountBy(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  findBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findBy(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  findOneOrFail(options: FindOneOptions<T>) {
    try {
      return this.__repo.findOneOrFail(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  findOneByOrFail(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneByOrFail(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  create(t: T) {
    try {
      return this.__repo.create({ ...t, uuid: v4() });
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  save(t: T) {
    try {
      return this.__repo.save({ ...t, uuid: v4() });
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  update(id: number, updated: QueryDeepPartialEntity<T>) {
    try {
      return this.__repo.update(id, updated);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  delete(id: number) {
    try {
      return this.__repo.delete(id);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  async recover(id: number) {
    try {
      const found = await this.__repo.findOne({
        where: { id } as any,
        withDeleted: true,
      });
      return await this.__repo.recover(found);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  count(options?: FindManyOptions<T>) {
    try {
      return this.__repo.count(options);
    } catch (err) {
      this.logger.error(err);
    }
    return;
  }

  softDelete(id: number) {
    try {
      return this.__repo.softDelete(id);
    } catch (err) {
      this.logger.error(err);
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
      this.logger.error(err);
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
      this.logger.error(err);
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
      this.logger.error(err);
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
      this.logger.error(err);
    }
    return;
  }
}
