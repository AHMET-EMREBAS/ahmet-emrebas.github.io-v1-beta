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
  CreateEmailDto,
  UpdateEmailDto,
} from '../dtos';
import { Email } from '../entities';
import { EmailService } from '../services/email.service';

@RestController({
  secure: true,
  resource: 'email',
})
export class EmailController {
  constructor(private readonly dataService: EmailService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateEmailDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Email>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateEmailDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Email>) {
    return this.dataService.delete(id, query);
  }
}
