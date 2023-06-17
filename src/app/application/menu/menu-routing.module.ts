import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerMenuComponent} from "./container-menu/container-menu.component";

const routes: Routes = [
  {path :"" , component : ContainerMenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
