export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  categoryId: number;
  categoryName: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}
