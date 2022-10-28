import { IUserEntity } from 'common';
import {
  DeleteReq,
  GetReq,
  GetReqById,
  IDParam,
  PostReq,
  QueryDTO,
  ReqBody,
  ReqQuery,
  ReqUser,
  RestController,
  UpdateReq,
} from 'core';

import { Query } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities';

@RestController({
  secure: true,
  resource: 'category',
})
export class CategoryController {
  constructor(private readonly dataService: CategoryService) {}

  @PostReq()
  create(
    @ReqBody() createDTO: CreateCategoryDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.create({ ...createDTO, createdBy: user.id });
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Category>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number, @ReqUser() user: IUserEntity) {
    const updated = await this.dataService.viewOne(id);
    await this.dataService.update(id, { lastSeenBy: user.id });
    return updated;
  }

  @UpdateReq()
  update(
    @IDParam() id: number,
    @ReqBody() updateDTO: UpdateCategoryDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.update(id, { ...updateDTO, updatedBy: user.id });
  }

  @DeleteReq()
  async softDelete(
    @IDParam() id: number,
    @Query() query: QueryDTO<Category>,
    @ReqUser() user: IUserEntity
  ) {
    await this.dataService.update(id, { deletedBy: user.id });

    if (query.hardDelete) {
      return await this.dataService.delete(id);
    }
    return await this.dataService.softDelete(id);
  }
}
