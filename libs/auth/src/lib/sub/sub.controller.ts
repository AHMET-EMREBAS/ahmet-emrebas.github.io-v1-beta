import { TransformPipe } from 'transformers';
import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';

import { PermissionGuard } from '../guards';
import { CreateSubDTO } from './dto/create-sub.dto';
import { Sub } from './entity/sub.entity';

@ApiTags(SubController.name)
@UseGuards(PermissionGuard)
@Controller('api/sub')
export class SubController {
  constructor(
    @InjectRepository(Sub) private readonly subRepo: Repository<Sub>
  ) {}

  @Post()
  create(@Body(ValidationPipe, TransformPipe) sub: CreateSubDTO) {
    return this.subRepo.save(sub);
  }
}
