import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getUserCart(user_id: number){
    return this.http.get<any>(`${this.apiUrl}/user-cart/${user_id}`)
  }

  addToCart(data: Partial<Cart>){
    return this.http.post(`${this.apiUrl}/carts`, data);
  }

  updateAmountProductOnCart(cart_id: number, data: Partial<Cart>){
    return this.http.put(`${this.apiUrl}/carts/${cart_id}`, data)
  }

  deleteProductOnCart(cart_id: number){
    return this.http.delete(`${this.apiUrl}/carts/${cart_id}`)
  }

//----------------------------------------------------------------------------------

  addProduct(product:Cart){
    if (localStorage.getItem("Cart") == null){
      localStorage.setItem("Cart", JSON.stringify([]));
    }
    var cart = JSON.parse(localStorage.getItem("Cart") ?? '');

    cart.push(product)
    localStorage.setItem("Cart", JSON.stringify(cart));
  }

  clear(){
    if (localStorage.getItem("Cart") != null){
      localStorage.setItem("Cart", JSON.stringify([]));
    }
  }

  removeProduct(product:Cart){
    if (localStorage.getItem("Cart") == null){
      localStorage.setItem("Cart", JSON.stringify([]));
    }
    var cart = JSON.parse(localStorage.getItem("Cart") ?? '');

    cart.remove(product);
    localStorage.setItem("Cart", JSON.stringify(cart));
  }

  getCart(){
    if (localStorage.getItem("Cart") == null){
      localStorage.setItem("Cart", JSON.stringify([]));
    }
    var cart = JSON.parse(localStorage.getItem("Cart") ?? '');
    return cart;
  }

  buy(){

  }
}
