import { ClassConstructor } from 'class-transformer';

import { ApiBody } from '@nestjs/swagger';

import {
  IdParam,
  ReqBody,
  SaveOne,
  UniqueBy,
  UpdateOneById,
} from '../param-decorators';
import {
  ReadPermission,
  WritePermission,
} from '../security';
import { CrudService } from '../service';

export function GetPostController<T>(
  name: string,
  createDTO: ClassConstructor<any>,
  updateDTO: ClassConstructor<any>
): any {
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

    @ReadPermission(name)
    @UniqueBy()
    async uniqueBy(@ReqBody(updateDTO) uniqueObj: any) {
      const found = await this.__service.findOneBy(uniqueObj);
      return !!found;
    }
  }

  return PostController;
}
