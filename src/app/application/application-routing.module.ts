import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "../_shared/components/layout/layout.component";

const routes : Routes =[
  {
    path : "",
    component : LayoutComponent,
    children :[
      //{path :"admin" , component : }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports :[RouterModule]
})
export class ApplicationRoutingModule { }
