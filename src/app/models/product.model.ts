export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category_id: number;
  category_name: string;
  stock: number;
  created_at: Date;
  updated_at: Date;
}
