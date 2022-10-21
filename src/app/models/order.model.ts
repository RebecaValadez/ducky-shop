export interface Order {
  orderNumber: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  status: boolean;
  token: string;
}
