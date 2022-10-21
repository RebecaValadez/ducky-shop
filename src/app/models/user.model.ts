export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  fullName: string;
  password: string;
  addressLine1: string;
  addressLine2: string;
  addressCity: string;
  addressState: string;
  addressCountry: string;
  addressCp: number;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}
