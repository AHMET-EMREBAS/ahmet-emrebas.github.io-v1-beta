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

import { InternalServerErrorException } from '@nestjs/common';

export class ResourceService<T> {
  constructor(public readonly __repo: Repository<T>) {}

  find(options?: FindManyOptions<T>) {
    try {
      return this.__repo.find(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findOne(options?: FindOneOptions<T>) {
    try {
      return this.__repo.findOne(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findOneBy(options?: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneBy(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findAndCount(options?: FindManyOptions<T>) {
    try {
      return this.__repo.findAndCount(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findAndCountBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findAndCountBy(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findBy(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findOneOrFail(options: FindOneOptions<T>) {
    try {
      return this.__repo.findOneOrFail(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  findOneByOrFail(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    try {
      return this.__repo.findOneByOrFail(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  create(t: DeepPartial<T>) {
    try {
      return this.__repo.create({ ...t, uuid: v4() });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  save(t: T) {
    try {
      return this.__repo.save({ ...t, uuid: v4() });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updated: QueryDeepPartialEntity<T>) {
    try {
      return (await this.__repo.update(id, updated)).affected > 0;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async delete(id: number) {
    const deleteResult = await this.__repo.delete(id);
    return deleteResult.affected > 0;
  }

  async recover(id: number) {
    try {
      const found = await this.__repo.findOne({
        where: { id } as unknown as FindOptionsWhere<T>,
        withDeleted: true,
      });
      return await this.__repo.recover(found);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  count(options?: FindManyOptions<T>) {
    try {
      return this.__repo.count(options);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async softDelete(id: number) {
    try {
      return (await this.__repo.softDelete(id)).affected > 0;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Add many to  many relation ship
   * @param id
   * @param relationId
   * @param relationName
   * @returns
   */
  add(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .add(relationId);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Add many to one relationship
   * @param id
   * @param relationId
   * @param relationName
   * @returns
   */
  set(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(relationId);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Remove many to one relationship
   * @param id
   * @param relationName
   * @returns
   */
  unset(id: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(null);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Remove many to many relationship
   * @param id
   * @param relationId
   * @param relationName
   * @returns
   */
  remove(id: number, relationId: number, relationName: string) {
    try {
      return this.__repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .remove(relationId);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
