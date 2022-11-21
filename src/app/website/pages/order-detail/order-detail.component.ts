import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  user!: User;
  user_id!: number;
  carts: Cart[] = [];
  total: number = 0;
  order!: Order
  orders!: Order[];
  order_number!: number;
  fecha = Date.now()

  constructor(
    private ordersService: OrdersService,
    private usersService: UsersService,
    private cartService: CartsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUser()

    this.route.params.subscribe((params: Params) => {
      this.order_number = params['order'];
      console.log(params['order'])
      console.log(this.order_number)

      this.ordersService.getOrder(this.order_number)
      .subscribe(data => {

        console.log(data)

      //   this.orders = data.data["1"]
      //   console.log(this.orders)
      //   this.order = this.orders[0]
      //   console.log(this.order)

      //   this.orders.forEach(order => {
      //     this.cartService.getUserCart(this.user_id).subscribe(data => {
      //       this.carts = data.data;

      //       this.carts.forEach(cart => {
      //         this.total += cart.amount
      //       })
      //     })
      //   })
      })
    })
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

  backHome() {
    this.router.navigate(['/home'])
  }

}
