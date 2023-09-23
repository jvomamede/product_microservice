import { Injectable } from '@nestjs/common';
import { ExternalService } from './external-service/external-service.service';
import { URLsExternal } from './config/url-external';

@Injectable()
export class AppService {

  constructor(private externalService: ExternalService) {}

  getHello(): string {
    return 'Hello World!';
  }

  public async getProductById(): Promise<any> {
    return this.externalService.getDataFromExternalService(
      URLsExternal.URL_PRODUCT_SERVICE.GET_PRODUCT_BY_ID, 1
    );
  }
}
