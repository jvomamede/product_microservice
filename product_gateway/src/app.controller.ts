import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './models/product.model';

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

  @Post("/product/create")
  public async createProduct(@Body() product: Product): Promise<any> {
    return await this.appService.createProduct(product);
  }


}
