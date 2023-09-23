import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Product } from 'src/models/product.model';

@Injectable()
export class ExternalService {
    constructor(private readonly httpService: HttpService) {}

    public getDataFromExternalService(url?: string, id?: number, data?: Product | any): Observable<
        Product | any
    > {

        if(id) {
            return this.httpService.get(`${url}/${id}`).pipe(
                map((response) => response.data)
            );
        } 

        return this.httpService.get(url).pipe(
            map((response) => response.data)
        );
    }
}
