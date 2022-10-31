import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}
  @Post()
  create(@Body(new ValidationPipe({ transform: true })) body: CreateUserDto) {
    return this.userRepo.save(body);
  }
}
