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
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dto';
import { CustomersService } from 'src/services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  get() {
    return this.customersService.findAll();
  }

  @Get(':customersId')
  getOne(@Param('customersId', ParseIntPipe) customersId: number) {
    return this.customersService.findOne(customersId);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':customersId')
  update(
    @Param('customersId', ParseIntPipe) customersId: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(customersId, payload);
  }

  @Delete(':customersId')
  remove(@Param('customersId', ParseIntPipe) customersId: number) {
    return this.customersService.remove(customersId);
  }
}
