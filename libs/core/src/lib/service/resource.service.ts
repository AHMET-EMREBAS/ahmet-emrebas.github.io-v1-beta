import {
  DeepPartial,
  Equal,
  Repository,
} from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';

import { Injectable } from '@nestjs/common';

import { QueryDTO } from '../query';

@Injectable()
export class ResourceService<
  E extends { id?: number },
  E2 extends { id?: number }
> {
  constructor(
    private readonly __repo: Repository<E>,
    private readonly __viewRepo: Repository<E2>
  ) {}
  async create(createDto: DeepPartial<E>) {
    const r = await this.__repo.save(createDto);
    return await this.__viewRepo.findOneBy({ id: r.id } as any);
  }

  findAll(query: QueryDTO<E>) {
    return this.__repo.find(query);
  }

  findOne(id: number) {
    return this.__repo.findOneBy({ id } as any);
  }

  async update(id: number, updateDto: QueryDeepPartialEntity<E>) {
    return await this.__repo.update(id, updateDto);
  }

  softDelete(id: number) {
    return this.__repo.softDelete(id);
  }

  delete(id: number) {
    return this.__repo.delete(id);
  }

  viewAll(query: QueryDTO<E2>) {
    return this.__viewRepo.find(query);
  }

  viewOne(id: number) {
    return this.__viewRepo.findOneBy({ id } as any);
  }

  findOneBy(property: keyof E2, value: string) {
    return this.__viewRepo.findOneBy({ [property]: Equal(value) } as any);
  }
}
