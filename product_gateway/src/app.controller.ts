import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/gateway")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/product/get/:id")
  public async getProduct(@Param('id') id: number): Promise<any> {
    return await this.appService.getProductById(id);
  }

  @Get("/product/all")
  public async allProduct(): Promise<any> {
    return await this.appService.allProduct();
  }


}
