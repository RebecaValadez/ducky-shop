import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = '';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getAllProductsByCategory(categoryId: number) {
    return this.http.get<Product[]>(`${this.apiUrl}/products/${categoryId}`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  createProduct(data: Partial<Product>) {
    return this.http.post(`${this.apiUrl}/products`, data);
  }

  updateProduct(id: number, data: Partial<Product>) {
    return this.http.put(`${this.apiUrl}/products/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }
}
