import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  insertToCart(data: Partial<Cart>){
    return this.http.post(`${this.apiUrl}/carts`, data);
  }

  updateAmountProductOnCart(amount: number, data: Partial<Cart>){
    return this.http.put(`${this.apiUrl}/carts/${amount}`, data)
  }

  getUserCart(user: number){
    return this.http.get<any>(`${this.apiUrl}/user-cart/${user}`)
  }

  deleteProductOnCart(product_id: number){
    return this.http.delete(`${this.apiUrl}/carts/${product_id}`)
  }

}
