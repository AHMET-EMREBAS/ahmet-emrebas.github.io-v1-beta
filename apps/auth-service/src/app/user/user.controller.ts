import { TransformPipe } from 'transformers';
import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@ApiTags(UserController.name)
@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}
  @Post()
  create(
    @Body(ValidationPipe, TransformPipe)
    body: CreateUserDto
  ) {
    console.log(body);
    return this.userRepo.save(body);
  }

  @Get()
  getUsers() {
    return this.userRepo.find();
  }
}
