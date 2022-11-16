export interface Cart {
  id: number;
  user_id: number;
  product_id: number;
  amount: number;
  created_at: Date;
  updated_at: Date;
  product_name?: string;
  product_price?: number;
  product_subtotal?: number;
}
