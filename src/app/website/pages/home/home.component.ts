import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productos: Array<Product> = [];
  constructor() { }

  ngOnInit(): void {
    this.productos.push({
      id: 1,
      code: "string",
      name: "Producto 1",
      price: 999999,
      description: "Descripcion",
      category_id: 1,
      category_name: "Alimentos",
      stock: 999999,
      created_at: new Date(),
      updated_at: new Date()
    });
  }

}
