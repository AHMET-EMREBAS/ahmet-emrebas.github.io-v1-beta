import { ClassConstructor } from 'class-transformer';

import { ApiBody } from '@nestjs/swagger';

import {
  IdParam,
  ReqBody,
  SaveOne,
  UpdateOneById,
} from '../param-decorators';
import { WritePermission } from '../security';
import { CrudService } from '../service';

export function GetPostController<T>(
  name: string,
  createDTO: ClassConstructor<any>,
  updateDTO: ClassConstructor<any>
) {
  class PostController {
    constructor(public readonly __service: CrudService<T>) {}

    @WritePermission(name)
    @ApiBody({ type: createDTO })
    @SaveOne()
    save(@ReqBody(createDTO) body: any) {
      return this.__service.save(body);
    }

    @WritePermission(name)
    @ApiBody({ type: updateDTO })
    @UpdateOneById()
    update(@IdParam() id: number, @ReqBody(updateDTO) updated: any) {
      return this.__service.update(id, updated);
    }
  }

  return PostController;
}
