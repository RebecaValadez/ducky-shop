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
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';


@NgModule({
  declarations: [
    UsersComponent,
    ProductsComponent,
    OrdersComponent,
    CategoriesComponent,
    LayoutComponent,
    HomeComponent,
    CreateProductComponent,
    EditProductComponent,
    EditCategoryComponent,
    EditUserComponent,
    CreateUserComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    QuicklinkModule
  ]
})
export class AdminModule { }
