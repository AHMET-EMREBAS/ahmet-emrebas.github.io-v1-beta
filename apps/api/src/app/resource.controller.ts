import { validate } from 'class-validator';
import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UnprocessableEntityException,
} from '@nestjs/common';

import { InjectRepo } from './consts';

@Controller(':resource')
export class ResourceController {
  private readonly uniqueFields!: string[];
  constructor(@InjectRepo() private readonly repo: Repository<any>) {
    this.uniqueFields = this.repo.metadata.uniques.map(
      (e) => e.columns[0].propertyName
    );
  }

  async isUnique(body: any) {
    for (const u of this.uniqueFields) {
      const found = await this.repo.findOneBy({ [u]: body[u] });
      if (found) {
        throw new UnprocessableEntityException(`${u} must be unique!`);
      }
    }
  }

  @Get()
  get() {
    return this.repo.find();
  }

  @Post()
  async post(@Body() body: any) {
    const created = this.repo.create(body);
    const errors = await validate(created);

    if (errors?.length > 0) {
      console.log(errors);
      throw new UnprocessableEntityException(errors[0]);
    }
    console.log(errors);
    return this.repo.save(body);
  }

  @Put(':id')
  update(@Param(':id') id: number, @Body() body: any) {
    return this.repo.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.repo.delete(id);
  }
}
