import { PartialType } from '@nestjs/swagger';

import { StoreCreateDTO } from './store.create-dto';

export class StoreUpdateDTO extends PartialType(StoreCreateDTO) {}
