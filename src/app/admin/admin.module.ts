import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    UsersComponent,
    ProductsComponent,
    OrdersComponent,
    CategoriesComponent,
    NavComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
