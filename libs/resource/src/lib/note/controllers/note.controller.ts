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
  CreateNoteDto,
  UpdateNoteDto,
} from '../dtos';
import { Note } from '../entities';
import { NoteService } from '../services/note.service';

@RestController({
  secure: true,
  resource: 'note',
})
export class NoteController {
  constructor(private readonly dataService: NoteService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateNoteDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Note>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateNoteDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Note>) {
    return this.dataService.delete(id, query);
  }
}
