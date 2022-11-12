import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { User } from './../models/user.model';
import { Auth } from './../models/auth.model';
import { TokenService } from './../services/token.service';
import { checkToken } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  apiUrl = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) { }

  login(data: Partial<User>){
    return this.http.post<Auth>(`${this.apiUrl}/auth/login/`, data)
    .pipe(
      tap(response => this.tokenService.saveToken(response.token))
    );
  }

  getUserLogged() {
    return this.http.get<any>(`${this.apiUrl}/auth/me`, {context: checkToken()});
  }

  getUser(id: number) {
    return this.http.get<any>(`${this.apiUrl}/auth/users/${id}/`, {context: checkToken()});
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/auth/users/${id}`, {context: checkToken()});
  }

  getAllUsers() {
    return this.http.get<any>(`${this.apiUrl}/auth/users/`, {context: checkToken()});
  }

  createUser(data: Partial<User>) {
    return this.http.post<User>(`${this.apiUrl}/auth/users/`, data);
  }

  updateUser(id: number, data: Partial<User>) {
    return this.http.put<User>(`${this.apiUrl}/auth/users/${id}/`, data, {context: checkToken()});
  }
}
