import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  //apiUrl = 'http://ecommerceapi.x10.mx/api';
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // setOrderAsCompleted(id: number) {
  //   //here we must give a token
  //   return this.http.post<Order>(`${this.apiUrl}/orders/${id}`);
  //  }

  getAllOrders(){
    return this.http.get<any>(`${this.apiUrl}/orders`);
  }

  createOrder(data: Partial<Order>) {
    return this.http.post<Order>(`${this.apiUrl}/orders/`, data);
  }
}
