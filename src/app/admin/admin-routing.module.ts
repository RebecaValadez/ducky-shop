import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'create-product',
        component: CreateProductComponent
      },
      {
        path: 'edit-product',
        component: EditProductComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'create-category',
        component: CreateCategoryComponent
      },
      {
        path: 'edit-category',
        component: EditCategoryComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'create-user',
        component: CreateUserComponent
      },
      {
        path: 'edit-user',
        component: EditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
