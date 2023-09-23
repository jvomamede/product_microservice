import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Product } from 'src/models/product.model';

@Injectable()
export class ExternalService {
    constructor(private readonly httpService: HttpService) {}

    public async getDataFromExternalService(
        url?: string, 
        method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT', 
        data?: Product | any, 
        id?: string
    ): Promise<Product | any> {

        return await this.httpService.get(url).pipe(
            map((response) => response.data)
        );
    }
}
