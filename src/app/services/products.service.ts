import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   //apiUrl = 'http://ecommerceapi.x10.mx/api';
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }

  getAllProductsByCategory(categoryId: number) {
    return this.http.get<any>(`${this.apiUrl}/products-by-category/${categoryId}`);
  }

  getProductsOnStock() {
    return this.http.get<any>(`${this.apiUrl}/products-on-stock`);
  }

  getProduct(id: number) {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }

  createProduct(data: Partial<Product>) {
    return this.http.post(`${this.apiUrl}/products/`, data);
  }

  updateProduct(id: number, data: Partial<Product>) {
    return this.http.put(`${this.apiUrl}/products/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }

  // searchProduct(data: Partial<Product>){
  //   return this.http.get(`${this.apiUrl}/products-search`, data);
  // }
}
