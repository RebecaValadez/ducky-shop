import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { BuyComponent } from './pages/buy/buy.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    NavComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MycartComponent,
    ProductDetailComponent,
    OrderDetailComponent,
    BuyComponent,
    CategoryComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
