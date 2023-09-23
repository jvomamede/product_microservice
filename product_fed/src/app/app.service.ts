import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  public getProductById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/product/api/v1/product/getproduct/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == 404) {
          console.log('Product Not Found');
        }
        return error.error;
      })
    )
  }
}
