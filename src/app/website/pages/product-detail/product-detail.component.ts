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

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService:CartsService,
    private usersService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
      console.log(params['id']);
      if (this.productId) {
        this.getProduct();
      }
    });
  }

  private getProduct() {
    this.productsService.getProduct(this.productId)
      .subscribe(data => {
        this.producto = data.data;
        console.log(this.producto);
      });
  }

  getUser() {
    this.usersService.getUserLogged()
      .subscribe(data => {
        this.user = data
      })
  }

  addToCart(){
    var cart! : Cart;

    cart.product_id = this.producto.id;
    cart.amount = this.producto.price;
    cart.user_id = this.user.id;
    this.cartService.addToCart(cart)
    .subscribe(data => {
      localStorage.setItem('cart_id', data.data.id);
    });
  }

  buy(){
    this.router.navigate(['/buy']);
  }
}
