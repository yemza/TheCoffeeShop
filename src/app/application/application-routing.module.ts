import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "../_shared/components/layout/layout.component";
import {MenuModule} from "./menu/menu.module";
import {ProductModule} from "./product/product.module";

const routes : Routes =[
  {
    path : "",
    component : LayoutComponent,
    children :[
      {path :"Menu" , loadChildren : () => import('./menu/menu.module').then(m => m.MenuModule)},
      {path :"Product" , loadChildren : () => import('./product/product.module').then(m => m.ProductModule)}

    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports :[RouterModule]
})
export class ApplicationRoutingModule { }
