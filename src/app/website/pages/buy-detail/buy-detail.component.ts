import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-buy-detail',
  templateUrl: './buy-detail.component.html',
  styleUrls: ['./buy-detail.component.scss']
})
export class BuyDetailComponent implements OnInit {
  productos!: Array<Product>;

  constructor() { }

  ngOnInit(): void {
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
  }
}
