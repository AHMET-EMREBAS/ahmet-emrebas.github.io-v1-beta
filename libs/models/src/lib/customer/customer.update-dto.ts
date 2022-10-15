import { PartialType } from '@nestjs/swagger';

import { CustomerCreateDTO } from './customer.create-dto';

export class CustomerUpdateDTO extends PartialType(CustomerCreateDTO) {}
