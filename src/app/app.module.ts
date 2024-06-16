import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { ProductAddComponent } from './components/product-add/product-add.component';


import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { DetailProductComponent } from './components/cart/detail-product/detail-product.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SumaryOrderComponent } from './components/orders/sumary-order/sumary-order.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { RegistrationComponent } from './components/authetication/registration/registration.component';
import { LoginComponent } from './components/authetication/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadingSpinnerComponent } from './components/orders/spinner/loading-spinner.component';




@NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    HeaderAdminComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    DetailProductComponent,
    HeaderUserComponent,
    SumaryOrderComponent,
    PaymentSuccessComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    LoadingSpinnerComponent,
        
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
    
      
       
        
    ]
})
export class AppModule { }
