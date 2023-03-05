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
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dto';
import { BrandsService } from 'src/services/brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  get() {
    return this.brandsService.findAll();
  }

  @Get(':brandsId')
  getOne(@Param('brandsId', ParseIntPipe) brandsId: number) {
    return this.brandsService.findOne(brandsId);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':brandsId')
  update(
    @Param('brandsId', ParseIntPipe) brandsId: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(brandsId, payload);
  }

  @Delete(':brandsId')
  remove(@Param('brandsId', ParseIntPipe) brandsId: number) {
    return this.brandsService.remove(brandsId);
  }
}
