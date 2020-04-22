import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpointURL = `${environment.API_URL}products`;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpointURL);
  }

  public getProductByID(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.endpointURL}/${id}`);
  }

  public updateProduct(id: number, product: Product) {
    return this.http.put(`${this.endpointURL}/${id}`, product);
  }

  public addProduct(product: Product) {
    return this.http.post<Product>(this.endpointURL, product);
  }

  public removeProduct(id: number) {
    return this.http.delete(`${this.endpointURL}/${id}`);
  }
}

