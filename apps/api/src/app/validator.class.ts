import { instanceToInstance } from 'class-transformer';
import {
  validate,
  ValidatorOptions,
} from 'class-validator';
import { Repository } from 'typeorm';

import { UnprocessableEntityException } from '@nestjs/common';

export class ValidatorClass {
  private readonly uniqueFields!: string[];

  constructor(public readonly repo: Repository<any>) {
    this.uniqueFields = this.repo.metadata.uniques.map(
      (e) => e.columns[0].propertyName
    );
  }

  protected async isUnique(body: any) {
    for (const u of this.uniqueFields) {
      if (!body[u]) {
        continue;
      }
      const found = await this.repo.findOneBy({ [u]: body[u] });
      if (found) {
        throw new UnprocessableEntityException(`${u} must be unique!`);
      }
    }
  }

  protected async validateDTO(body: any, update = false) {
    const commonOptions: ValidatorOptions = {
      stopAtFirstError: true,
      validationError: { target: false, value: false },
    };
    const updateOptions: ValidatorOptions = update
      ? {
          skipMissingProperties: true,
          skipNullProperties: true,
          skipUndefinedProperties: true,
        }
      : {};
    const created = this.repo.create(body);

    const transformed = instanceToInstance(created, {
      exposeUnsetFields: false,
    });

    const errors = await validate(transformed, {
      ...commonOptions,
      ...updateOptions,
    });

    if (errors?.length > 0) {
      throw new UnprocessableEntityException(
        Object.values(errors[0].constraints)[0]
      );
    }

    await this.isUnique(body);
  }
}
