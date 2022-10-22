import { Product } from './../models/product.model';

export interface Cart {
  product_id: number;
  quantity: number;
  // product_list: ;  falta definir qué tipo es
}
