import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { AdminRoutingModule } from './admin-routing.module';

import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { CategoryComponent } from './pages/category/category.component';


@NgModule({
  declarations: [
    UsersComponent,
    ProductsComponent,
    OrdersComponent,
    CategoriesComponent,
    LayoutComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    QuicklinkModule
  ]
})
export class AdminModule { }
