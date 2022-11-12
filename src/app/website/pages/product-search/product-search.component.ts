import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  products: Array<Product> = [];
  product: Product = {
    id: 1,
    code: "2344DFG44",
    name: "LAPTOP HP",
    price: 8799,
    category_id: 2,
    category_name: "Tecnologia",
    description: "Procesador: AMD Ryzen 5 3500U Disco duro HDD: 1 TB Memoria RAM: 8 GB DDR4 Pantalla: 14 pulgadas",
    stock: 7,
  };
  productName!: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productName = params['name'];
      if (this.productName) {
        this.product.name = this.productName
        this.getProducts();
      }
    });
  }

  private getProducts() {
    this.productsService.searchProduct(this.product)
      .subscribe(data => {
        this.products = data.data;
      });
  }

  goProductDetail(id: number){
    this.router.navigate(['/product', id]);
  }
}
