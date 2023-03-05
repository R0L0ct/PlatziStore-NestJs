import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'Hola guachin';
  }

  @Get('nuevo')
  newEndPoint() {
    return 'soy nuevito guach';
  }

  @Get('/ruta/')
  newRoute() {
    return 'soy alta ruta guach';
  }


}
