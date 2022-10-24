import { Injectable } from '@angular/core';
import { Injectable } from '@angular/common/http';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  apiUrl = '';//Aqui va la url de la api

  constructor(private http: HttpClient) { }

  insertToCart(data: Partial<Cart>){
   return this.http.post(`${this.apiUrl}/carts`, data);
  }

  deleteItemFromCart(product_id:number){
    return this.http.delete(`${this.apiUrl}/carts/${product_id}`);
  }

  getCart(){
    return this.http.get<Cart[]>(`${this.apiUrl}/carts`);
  }

  //deleteAllFromCart(){}

}
