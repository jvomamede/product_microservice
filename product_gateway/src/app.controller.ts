import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/gateway")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/get/product/:id")
  getProduct(@Param('id') id: number): Promise<any> {
    console.log('ID: ', id);
    return this.appService.getProductById();
  }
}
