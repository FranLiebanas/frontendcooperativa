import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/product', component: ProductListComponent },
  { path: 'admin/product/add', component: ProductAddComponent},
  { path: 'admin/product/add/:id', component: ProductAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ToastrModule.forRoot()],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
