import { PartialType } from '@nestjs/swagger';

import { DepartmentCreateDTO } from './department.create-dto';

export class DepartmentUpdateDTO extends PartialType(DepartmentCreateDTO) {}
