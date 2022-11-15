import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/models/user.model';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CartsService } from 'src/app/services/carts.service';
import { Cart } from 'src/app/models/cart.model';
import {ProductsService} from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  productos: Array<Product> = [];
  user!: User;
  total : number = 0

  constructor(private usersService: UsersService,
              private cartsService:CartsService,
              private productService:ProductsService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.getUser()

    this.productos.push({
      id: 1,
      code: "string",
      name: "string",
      price: 999999,
      description: "string",
      category_id: 1,
      category_name: "Alimentos",
      stock: 999999,
      created_at: new Date(),
      updated_at: new Date()
    });
    var cart = this.cartsService.getCart()

    cart.forEach((cart:Cart) => {
       this.productService.getProduct(cart.product_id).subscribe(data=>{
        this.total = data.data.price;
       })
    });
  }

  getUser() {
    this.usersService.getUserLogged()
      .subscribe(data => {
        this.user = data
      })
  }

  VaciarCarrito(){
    if (localStorage.getItem("cart_id") != null){
      this.cartsService.deleteProductOnCart(0).subscribe(data => {
        
      });
    }
  }

  RealizarPedido(){
    this.router.navigate(['/buy_detail']);
  }

}
