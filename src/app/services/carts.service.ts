import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor() { }

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

  buy(){

  }
}
