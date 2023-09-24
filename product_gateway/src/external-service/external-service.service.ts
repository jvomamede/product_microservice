import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Product } from 'src/models/product.model';

@Injectable()
export class ExternalService {
    constructor(private readonly httpService: HttpService) {}

    public async getDataFromExternalService(
        url: string,
    ): Promise<Product | any> {
        return await this.httpService.get(url).pipe(
            map((response) => response.data)
        );
    }

    public async createDataFromExternalService(
        url: string,
        data: Product | any
    ): Promise<Product | any> {
        return await this.httpService.post(url, data).pipe(
            map((response) => response.data)
        );
    }
}
