import {
  DeleteReq,
  GetReq,
  GetReqById,
  IDParam,
  PostReq,
  QueryDTO,
  ReqBody,
  ReqQuery,
  RestController,
  UpdateReq,
} from 'core';

import { Query } from '@nestjs/common';

import {
  CreateProjectDto,
  UpdateProjectDto,
} from '../dtos';
import { Project } from '../entities';
import { ProjectService } from '../services/project.service';

@RestController({
  secure: true,
  resource: 'project',
})
export class ProjectController {
  constructor(private readonly dataService: ProjectService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateProjectDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Project>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateProjectDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Project>) {
    return this.dataService.delete(id, query);
  }
}
