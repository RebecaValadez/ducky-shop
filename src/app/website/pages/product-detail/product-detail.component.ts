import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  producto!: Product;

  constructor() { }

  ngOnInit(): void {
    this.producto = {
      id: 1,
      name: "Laptop",
      price: 999999,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vel totam at ad sint adipisci qui porro optio, deleniti blanditiis voluptas ea, dolore repudiandae. Excepturi aliquid architecto quo aspernatur saepe!",
      category_id: 1,
      category_name: "Tecnologia",
      stock: 999999,
      created_at: new Date(),
      updated_at: new Date()
    }
  }

}
