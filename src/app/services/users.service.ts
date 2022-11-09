import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  apiUrl = 'http://ecommerceapi.x10.mx/api';

  constructor(private http: HttpClient) { }

  loginUser(user:User){
      return this.http.post<User>(`${this.apiUrl}/auth/login`, user);
  }

  getUser(id: number) {
    return this.http.get<any>(`${this.apiUrl}/auth/users/${id}`);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.apiUrl}/auth/users/${id}`);
  }

  getAllUsers() {
    return this.http.get<any>(`${this.apiUrl}/auth/users/`);
  }

  createUser(data: Partial<User>) {
    return this.http.post<User>(`${this.apiUrl}/auth/users/`, data);
  }

  updateUser(id: number, data: Partial<User>) {
    return this.http.put<User>(`${this.apiUrl}/auth/users/${id}`, data);
  }

  
}
