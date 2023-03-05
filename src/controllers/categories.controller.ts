import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Body,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dto';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  get() {
    return this.categoriesService.findAll();
  }

  @Get(':categoriesId')
  getOne(@Param('categoriesId', ParseIntPipe) categoriesId: number) {
    return this.categoriesService.findOne(categoriesId);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':categoriesId')
  update(
    @Param('categoriesId', ParseIntPipe) categoriesId: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(categoriesId, payload);
  }

  @Delete(':categoriesId')
  remove(@Param('categoriesId', ParseIntPipe) categoriesId: number) {
    return this.categoriesService.remove(categoriesId);
  }
}
