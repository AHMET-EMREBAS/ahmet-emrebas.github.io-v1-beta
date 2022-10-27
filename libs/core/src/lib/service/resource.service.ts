import {
  DeepPartial,
  Repository,
} from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';

import { Injectable } from '@nestjs/common';

import { QueryDTO } from '../query';

@Injectable()
export class ResourceService<E, E2> {
  constructor(
    private readonly __repo: Repository<E>,
    private readonly __viewRepo: Repository<E2>
  ) {}
  create(createDto: DeepPartial<E>) {
    return this.__repo.save(createDto);
  }

  findAll(query: QueryDTO<E>) {
    return this.__repo.find(query);
  }

  findOne(id: number) {
    return this.__repo.findOneById(id);
  }

  update(id: number, updateDto: QueryDeepPartialEntity<E>) {
    return this.__repo.update(id, updateDto);
  }

  remove(id: number) {
    return this.__repo.delete(id);
  }

  viewAll(query: QueryDTO<E2>) {
    return this.__viewRepo.find(query);
  }

  viewOne(id: number) {
    return this.__viewRepo.findOneById(id);
  }
}
