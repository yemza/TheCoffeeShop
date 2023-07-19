import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
const routes : Routes =[

 {path :"Menu" , loadChildren : () => import('./menu/menu.module').then(m => m.MenuModule)},
 {path :"Product" , loadChildren : () => import('./product/product.module').then(m => m.ProductModule)}


]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports :[RouterModule]
})
export class ApplicationRoutingModule { }
