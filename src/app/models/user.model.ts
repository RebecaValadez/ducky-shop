export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  full_name: string;
  password: string;
  address_line_1: string;
  address_line_2: string;
  address_city: string;
  address_state: string;
  address_country: string;
  address_cp: number;
  created_at: Date;
  updated_at: Date;
}
