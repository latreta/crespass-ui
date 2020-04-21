import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  endpointURL: string = `${environment.API_URL}/brands`;

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.endpointURL);
  }

  getBrandByID(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.endpointURL}/${id}`);
  }

  addBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.endpointURL, brand);
  }

  updateBrand(id: number, brand: Brand) {
    return this.http.put(`${this.endpointURL}/${id}`, brand);
  }

  removeBrand(id: number, brand: Brand) {
    return this.http.delete(`${this.endpointURL}/${id}`);
  }

}
