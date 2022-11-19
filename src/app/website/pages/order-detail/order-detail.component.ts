import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  user!: User;
  user_id!: number;
  products: any[] = [];
  total : number = 0;
  order!: Order
  order_number: number = 0

  constructor(
    private ordersService: OrdersService,
    private usersService: UsersService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.usersService.getUserLogged()
      .subscribe(data => {
        this.user = data
        this.user_id = this.user.id
        this.order.user_id = this.user_id
        this.usersService.getUser(this.user.id)
        .subscribe(data => {
          this.user = data
          console.log(this.user)
        })
      })
  }

  backHome(){
    this.router.navigate(['/home'])
  }

}
