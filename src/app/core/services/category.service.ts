import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IService } from './iservice';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endpointURL: string = `${environment.API_URL}/categories`;

  constructor(private http: HttpClient) { }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.endpointURL, category);
  }

  updateCategory(id: number, category: Category) {
    return this.http.put(`${this.endpointURL}/${id}`, category);
  }

  removeCategory(id: number) {
    return this.http.delete(`${this.endpointURL}/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.endpointURL);
  }

  getCategoryByID(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.endpointURL}/${id}`);
  }
}
