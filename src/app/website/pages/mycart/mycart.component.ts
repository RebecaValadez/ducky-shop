import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/models/user.model';
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

  user!: User;
  user_id!: number;
  products: Cart[] = [];
  total : number = 0;
  subtotal : number = 0;

  constructor(
    private usersService: UsersService,
    private cartsService:CartsService,
    private productService:ProductsService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.usersService.getUserLogged()
      .subscribe(data => {
        this.user = data
        this.user_id = data.id
        this.getCartUser()
      })
  }

  getCartUser(){
    this.cartsService.getUserCart(this.user_id)
    .subscribe(data => {
      this.products = data.data
      this.getProduct()
      this.totalBuy()
    })
  }

  getProduct(){
    this.products.map(product => {
      this.productService.getProduct(product.product_id)
      .subscribe(data => {
        product.product_name = data.data.name
        product.product_price = data.data.price
        product.product_subtotal = (data.data.price * product.amount)
      })
    });
  }

  totalBuy(){
    this.products.forEach(product => {
      // this.total = this.total + product.product_subtotal
    });
  }

  updateQuantityProducts(product_id: number){

  }

  deleteProduct(product_id: number){
    this.cartsService.deleteProductOnCart(product_id)
    .subscribe(() => {
      this.total = 0
      this.getCartUser()
    })
  }

  buy(){
    this.router.navigate(['/buy']);
  }
  // ngOnInit(): void {
  //   this.getUser()

  //   /*
  //   this.productos.push({
  //     id: 1,
  //     code: "string",
  //     name: "string",
  //     price: 999999,
  //     description: "string",
  //     category_id: 1,
  //     category_name: "Alimentos",
  //     stock: 999999,
  //     created_at: new Date(),
  //     updated_at: new Date()
  //   });*/
  //   //var cart = this.cartsService.getCart()
  //   this.cartsService.getUserCart(this.user.id).subscribe(data=>{
  //     data.data.forEach((cart:Cart)=>{
  //       var product!:Product
  //       this.productService.getProduct(cart.product_id).subscribe(data=>{
  //         product = data.data;
  //        });
  //       this.carts.push([cart,product])
  //       this.total = cart.amount;
  //     });
  //   });
  //   /*cart.forEach((cart:Cart) => {
  //      this.productService.getProduct(cart.product_id).subscribe(data=>{
  //       this.total = data.data.price;
  //      })
  //   });*/
  // }

  // EliminarCarrito(id_cart:number){
  //   if (localStorage.getItem("cart_id") != null){
  //     this.cartsService.deleteProductOnCart(id_cart).subscribe(data => {

  //     });
  //   }
  // }
}
