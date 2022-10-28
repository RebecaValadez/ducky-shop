import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Order } from './../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl = 'http://ecommerceapi.x10.mx/api';

  constructor(private http: HttpClient) { }

  setOrderAsCompleted(id: number) {
    //here we must give a token
    return this.http.post<Order>(`${this.apiUrl}/orders/${id}`);
   }

   createOrder(data: Partial<Order>) {
    return this.http.post<Order>(`${this.apiUrl}/orders/`, data);
   }
}
