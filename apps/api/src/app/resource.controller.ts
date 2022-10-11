import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { InjectRepo } from './consts';
import { ValidatorClass } from './validator.class';

function Resource() {
  return Param('resource');
}

class EmptyClass {}

@ApiTags(ResourceController.name)
@Controller({
  path: ':resource',
  scope: Scope.REQUEST,
})
export class ResourceController extends ValidatorClass {
  constructor(@InjectRepo() repository: Repository<any>) {
    super(repository);
  }

  @Get()
  get(@Resource() resource: string) {
    return this.repo.find();
  }

  @Get(':id')
  getById(@Resource() resource: string, @Param('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Post()
  async post(@Resource() resource: string, @Body() body: EmptyClass) {
    await this.validateDTO(body);
    return await this.repo.save(body);
  }

  @Put(':id')
  async update(
    @Resource() resource: string,
    @Param('id') id: number,
    @Body() body: EmptyClass
  ) {
    await this.validateDTO(body, true);
    return await this.repo.update(id, body);
  }

  @Delete(':id')
  delete(@Resource() resource: string, @Param('id') id: number) {
    return this.repo.delete(id);
  }
}
