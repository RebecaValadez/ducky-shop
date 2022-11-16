import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuicklinkModule } from 'ngx-quicklink';
import { WebsiteRoutingModule } from './website-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { BuyComponent } from './pages/buy/buy.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './pages/account/account.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { BuyDetailComponent } from './pages/buy-detail/buy-detail.component';

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
    FooterComponent,
    AccountComponent,
    ProductSearchComponent,
    BuyDetailComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    QuicklinkModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WebsiteModule { }
