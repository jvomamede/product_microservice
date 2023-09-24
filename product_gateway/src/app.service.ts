import { Injectable } from '@nestjs/common';
import { ExternalService } from './external-service/external-service.service';
import { URLsExternal } from './http/url/url-external';
import { UrlService } from './http/url/url.service';
import { IURL } from './http/url/url-interface';
import { Product } from './models/product.model';

@Injectable()
export class AppService {

  private urls: IURL;

  constructor(
    private externalService: ExternalService,
    private urlService: UrlService,
  ) {
    this.urls = this.urlService.createURLProductService();
  }
  
  public async getProductById(id: number): Promise<any> {
    return await this.externalService.getDataFromExternalService(
      `${this.urls.GET_BY_ID}/${id}`
    );
  }
  
  public async allProduct(): Promise<any> {
    return await this.externalService.getDataFromExternalService(
      `${this.urls.ALL}`
    );
  }

  public async createProduct(product: Product): Promise<any> {
    return await this.externalService.createDataFromExternalService(
      this.urls.CREATE,
      product
    );
  }
}
