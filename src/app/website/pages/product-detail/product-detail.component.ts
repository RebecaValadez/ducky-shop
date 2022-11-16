import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Cart } from 'src/app/models/cart.model';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import {CartsService} from '../../../services/carts.service'
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  producto!: Product;
  productId!: number;
  user!: User;
  cart: Cart = {
    id: 1,
    product_id: 0,
    user_id: 0,
    amount: 0
  };

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService:CartsService,
    private usersService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUser()
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
      if (this.productId) {
        this.getProduct();
      }
    });
  }

  private getProduct() {
    this.productsService.getProduct(this.productId)
      .subscribe(data => {
        this.producto = data.data;
        this.cart.product_id = this.producto.id;
        this.cart.amount = Math.round(this.producto.price);
      });
  }

  getUser() {
    this.usersService.getUserLogged()
      .subscribe(data => {
        this.user = data
        this.cart.user_id = this.user.id;
      })
  }

  addToCart(){
    // this.updateProduct()
    console.log(this.cart)
    console.log(JSON.stringify(this.cart));
    this.cartService.addToCart(JSON.stringify(this.cart))
    .subscribe(data => {
      console.log("data")
    })
  }

  private updateProduct() {
    this.producto.stock = this.producto.stock - 1
    console.log(JSON.stringify(this.producto))
    const data = JSON.stringify(this.producto)
    this.productsService.updateProduct(this.productId, data)
      // .subscribe(data => {
      //   this.producto = data
      // });
  }

  buy(){
    this.router.navigate(['/buy']);
  }
}
