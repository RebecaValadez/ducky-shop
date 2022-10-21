import { Product } from './../models/product.model';

export interface Cart {
  productId: number;
  quantity: number;
  productList: Product[]
  token: string;
}
