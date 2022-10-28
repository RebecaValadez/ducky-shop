import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Category } from './../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrl = 'http://ecommerceapi.x10.mx/api';

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }

  getCategory(id: number) {
    return this.http.get<any>(`${this.apiUrl}/categories/${id}`);
  }

  createCategory(data: Partial<Category>) {
    return this.http.post<Category>(`${this.apiUrl}/categories`, data);
  }

  updateCategory(id: number, data: Partial<Category>) {
    return this.http.put<Category>(`${this.apiUrl}/categories/${id}`, data);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.apiUrl}/categories/${id}`);
  }
}
