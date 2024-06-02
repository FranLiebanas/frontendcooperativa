import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { DetailProductComponent } from './components/cart/detail-product/detail-product.component';
import { SumaryOrderComponent } from './components/orders/sumary-order/sumary-order.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/product', component: ProductListComponent },
  { path: 'admin/product/add', component: ProductAddComponent},
  { path: 'admin/product/add/:id', component: ProductAddComponent},
  { path: 'admin/category', component: CategoryListComponent},
  { path: 'admin/category/add', component: CategoryAddComponent},
  { path: 'admin/category/add/:id', component: CategoryAddComponent},
  { path: 'cart/detailproduct/:id', component: DetailProductComponent},
  { path: 'cart/sumary', component: SumaryOrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ToastrModule.forRoot()],
   
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
