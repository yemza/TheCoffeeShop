import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerListOfMenuComponent} from "./container-list-of-menu/container-list-of-menu.component";

const routes: Routes = [
  {path :"" , component : ContainerListOfMenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
