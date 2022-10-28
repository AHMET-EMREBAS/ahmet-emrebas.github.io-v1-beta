import { QueryDTO, ValidationPipe } from 'core';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities';
import { CategoryService } from './category.service';

@ApiTags(CategoryController.name)
@Controller('category')
export class CategoryController {
  constructor(private readonly dataService: CategoryService) {}

  @ApiOperation({ summary: 'Create entity' })
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @Post()
  create(@Body(ValidationPipe) createDTO: CreateCategoryDto) {
    return this.dataService.create(createDTO);
  }

  @ApiOperation({ summary: 'View entities' })
  @ApiOkResponse()
  @ApiBadGatewayResponse()
  @Get()
  findAll(@Query(ValidationPipe) query: QueryDTO<Category>) {
    return this.dataService.viewAll(query);
  }

  @ApiOperation({ summary: 'View entity by id' })
  @ApiOkResponse()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dataService.viewOne(id);
  }

  @ApiOperation({ summary: 'Update entity by id' })
  @ApiBadRequestResponse()
  @ApiOkResponse()
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateDTO: UpdateCategoryDto
  ) {
    return this.dataService.update(id, updateDTO);
  }

  @ApiOperation({ summary: 'Delete entity' })
  @ApiOkResponse()
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dataService.remove(id);
  }
}
