import { IUserEntity } from 'common';
import {
  DeepPartial,
  Equal,
  Repository,
} from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';

import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { BaseEntity } from '../entity';
import { QueryDTO } from '../query';

@Injectable()
export class ResourceService<E extends BaseEntity, E2 extends BaseEntity> {
  constructor(
    private readonly __repo: Repository<E>,
    private readonly __viewRepo: Repository<E2>
  ) {}

  async create(createDto: DeepPartial<E>) {
    const r = await this.__repo.save(createDto);
    return await this.__viewRepo.findOneBy({ id: r.id } as any);
  }

  async createOwn(createDto: DeepPartial<E>, user: IUserEntity) {
    const created = await this.__repo.save({
      ...createDto,
      createdBy: user.id,
    });

    return await this.__viewRepo.findOneBy({ id: created.id } as any);
  }

  findAll(query: QueryDTO<E>) {
    return this.__repo.find(query);
  }

  findAllOwn(query: QueryDTO<E>, user: IUserEntity) {
    return this.__repo.find({
      ...query,
      where: { ...query.where, createdBy: Equal(user.id) },
    });
  }

  findOne(id: number) {
    return this.__repo.findOneBy({ id } as any);
  }

  async findOneOwn(id: number, user: IUserEntity): Promise<E> | never {
    const found = await this.__repo.findOneBy({
      id,
      createdBy: Equal(user.id),
    } as any);

    if (user && found && found.createdBy === user.id) {
      return found;
    }

    throw new UnauthorizedException();
  }

  /**
   * Get own entities by entity view.
   * @param query
   * @returns
   */
  viewAll(query: QueryDTO<E2>) {
    return this.__viewRepo.find(query);
  }

  /**
   * Get own entities by entity view.
   * @param query
   * @param user
   * @returns
   */
  viewAllOwn(query: QueryDTO<E2>, user: IUserEntity) {
    return this.__viewRepo.find({
      ...query,
      where: { ...query?.where, createdBy: Equal(user.id) },
    });
  }

  /**
   * Get own entity by id by entity view.
   * @param id
   * @returns
   */
  viewOne(id: number) {
    return this.__viewRepo.findOneBy({ id } as any);
  }

  /**
   * Get own entity by id by entity view.
   * @param id
   * @param user
   * @returns
   */
  async viewOneOwn(id: number, user: IUserEntity): Promise<E2> | never {
    const found = await this.__viewRepo.findOneBy({
      id: id,
      createdBy: Equal(user.id),
    } as any);

    if (found && user && found.createdBy === user.id) {
      return found;
    }

    throw new UnauthorizedException();
  }

  async update(id: number, updateDto: QueryDeepPartialEntity<E>) {
    return await this.__repo.update(id, updateDto);
  }

  /**
   * Update the entity if the user owns it.
   * @param id
   * @param updateDto
   * @param user
   * @returns
   */
  async updateOwn(
    id: number,
    updateDto: QueryDeepPartialEntity<E>,
    user: IUserEntity
  ) {
    const found = await this.findOneOwn(id, user);

    if (found && user && found.createdBy == user.id) {
      return await this.__repo.update(id, updateDto);
    }

    throw new UnauthorizedException();
  }

  delete(id: number, query?: QueryDTO<E>) {
    if (query?.hardDelete === true) {
      return this.__repo.delete(id);
    }
    return this.__repo.softDelete(id);
  }

  /**
   * Delete the entity if the user owns it.
   * @param id
   * @param query
   * @param user
   * @returns
   */
  async deleteOwn(id: number, query: QueryDTO<E>, user: IUserEntity) {
    const found = await this.findOneOwn(id, user);

    if (found && user && user.id === found.createdBy) {
      if (query.hardDelete === true) {
        return await this.__repo.delete(id);
      }
      return await this.__repo.softDelete(id);
    }

    throw new UnauthorizedException();
  }

  count() {
    return this.__repo.count();
  }

  countOwn(user: IUserEntity) {
    return this.__repo.count({ where: { createdBy: Equal(user.id) } } as any);
  }
}
