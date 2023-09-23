import { Injectable } from '@nestjs/common';
import { URLsExternal } from './url-external';
import { IURL } from './url-interface';

@Injectable()
export class UrlService {

    public createURLProductService(): IURL {
        const URL: IURL = {
            GET_BY_ID: URLsExternal.URL_PRODUCT_SERVICE.GET_PRODUCT_BY_ID,
            ALL: URLsExternal.URL_PRODUCT_SERVICE.ALL_PRODUCT
        }

        return URL;
    }

}
