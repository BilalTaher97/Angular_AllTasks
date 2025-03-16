import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "Category", component: CategoryComponent },
  { path: "Product/:id", component: ProductComponent },
  { path: "ProductDetails/:id", component: ProductDetailsComponent },
  { path: "Register", component: RegComponent },
  { path: "Login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
