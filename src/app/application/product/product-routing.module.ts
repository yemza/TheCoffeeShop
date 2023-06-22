import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerListOfProductComponent} from "./container-list-of-product/container-list-of-product.component";

const routes: Routes = [
  {path :"" , component : ContainerListOfProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
