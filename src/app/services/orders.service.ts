import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './../models/order.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  // setOrderAsCompleted(id: number) {
  //   //here we must give a token
  //   return this.http.post<Order>(`${this.apiUrl}/orders/${id}`);
  //  }

  getAllOrders(){
    return this.http.get<any>(`${this.apiUrl}/orders`);
  }

  getOrder(id: number) {
    return this.http.get<any>(`${this.apiUrl}/orders/${id}`);
  }

  createOrder(data: Partial<Order>) {
    return this.http.post<Order>(`${this.apiUrl}/orders/`, data);
  }

  updateOrder(id: number, data: Partial<Order>) {
    return this.http.put(`${this.apiUrl}/orders/${id}`, data);
  }
}
