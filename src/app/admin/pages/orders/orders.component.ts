import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order.model';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getAllOrders()
      .subscribe((data: any) => {
        this.orders = data.data;
      });
  }
}
