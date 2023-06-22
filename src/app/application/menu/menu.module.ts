import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { ContainerListOfMenuComponent } from './container-list-of-menu/container-list-of-menu.component';
import {ListOfMenusComponent} from "./container-list-of-menu/list-of-menus/list-of-menus.component";


@NgModule({
  declarations: [
    ListOfMenusComponent,
    ContainerListOfMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
