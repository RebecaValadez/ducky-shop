import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  producto!: Product;
  productId!: number;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
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

  addToCart(){

  }

  buy(){
    this.router.navigate(['/buy']);
  }
}
