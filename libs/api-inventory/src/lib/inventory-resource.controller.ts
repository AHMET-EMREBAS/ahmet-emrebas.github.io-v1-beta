import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Scope,
} from '@nestjs/common';

export const RESOURCE_KEY = 'resource';
export const RESPOSITORY_TOKEN = 'RESPOSITORY_TOKEN';

@Controller({
  path: `:${RESOURCE_KEY}`,
  scope: Scope.REQUEST,
})
export class InventoryResourceController {
  constructor(
    @Inject(RESPOSITORY_TOKEN) private readonly repository: Repository<any>
  ) {}

  @Get()
  get() {
    return this.repository.find();
  }

  @Post()
  post(@Body() body: any) {
    return this.repository.save(body);
  }

  @Put()
  update(@Param('id') id: number, @Body() body: any) {
    return this.repository.update(id, body);
  }

  @Delete(':id')
  del(@Param('id') id: number) {
    return this.repository.delete(id);
  }
}
