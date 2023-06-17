import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "../_shared/components/layout/layout.component";
import {MenuModule} from "./menu/menu.module";

const routes : Routes =[
  {
    path : "",
    component : LayoutComponent,
    children :[
      {path :"Menu" , loadChildren : () => import('./menu/menu.module').then(m => m.MenuModule)}
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MenuModule,
  ],
  exports :[RouterModule]
})
export class ApplicationRoutingModule { }
