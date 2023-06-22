import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerListOfProductComponent } from './container-list-of-product/container-list-of-product.component';
import { ToolBarListProductComponent } from './container-list-of-product/tool-bar-list-product/tool-bar-list-product.component';
import {ListOfProductComponent} from "./container-list-of-product/list-of-product/list-of-product.component";
import {ProductRoutingModule} from "./product-routing.module";



@NgModule({
  declarations: [
    ContainerListOfProductComponent,
    ToolBarListProductComponent,
    ListOfProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
