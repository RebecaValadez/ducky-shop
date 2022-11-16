export interface Order {
  id: number;
  order_number: number;
  product_id: number;
  user_id: number;
  quantity: number;
  total_price: number;
  status: boolean;
}
