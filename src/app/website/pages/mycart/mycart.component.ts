import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/models/user.model';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  productos: Array<Product> = [];
  user!: User;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUser()

    this.productos.push({
      id: 1,
      code: "string",
      name: "string",
      price: 999999,
      description: "string",
      category_id: 1,
      category_name: "Alimentos",
      stock: 999999,
      created_at: new Date(),
      updated_at: new Date()
    });
  }

  getUser() {
    this.usersService.getUserLogged()
      .subscribe(data => {
        this.user = data
      })
  }

  

}
