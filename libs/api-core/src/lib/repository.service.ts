import {
  FindManyOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';

import { IncrementFieldDTO } from './query-options.dto';

export class RepositoryService<T> {
  constructor(private readonly repository: Repository<T>) {}

  find(query: FindManyOptions<T>) {
    return this.repository.find(query);
  }

  findOneById(id: number) {
    return this.repository.findOneBy({ id } as any);
  }

  save(body: T) {
    this.repository.save(body);
  }

  update(id: number, body: QueryDeepPartialEntity<T>) {
    return this.repository.update(id, body);
  }

  delete(id: number, hardDelete = false) {
    if (hardDelete) {
      return this.repository.delete(id);
    } else {
      return this.repository.softDelete(id);
    }
  }

  addRelation(id: number, relation: string, relationId: number) {
    return this.repository
      .createQueryBuilder()
      .relation(relation)
      .of(id)
      .add(relationId);
  }

  removeRelation(id: number, relation: string, relationId: number) {
    return this.repository
      .createQueryBuilder()
      .relation(relation)
      .of(id)
      .remove(relationId);
  }

  setRelation(id: number, relation: string, relationId: number) {
    return this.repository
      .createQueryBuilder()
      .relation(relation)
      .of(id)
      .set(relationId);
  }

  unsetRelation(id: number, relation: string) {
    return this.repository
      .createQueryBuilder()
      .relation(relation)
      .of(id)
      .set(null);
  }

  increment(query: FindOptionsWhere<T>, body: IncrementFieldDTO) {
    return this.repository.increment(query, body.property, body.value);
  }

  decrement(query: FindOptionsWhere<T>, body: IncrementFieldDTO) {
    return this.repository.decrement(query, body.property, body.value);
  }

  restore(id: number) {
    return this.repository.restore(id);
  }
}
