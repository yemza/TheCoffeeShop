import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { ContainerMenuComponent } from './container-menu/container-menu.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ListOfMenusComponent } from './list-of-menus/list-of-menus.component';


@NgModule({
  declarations: [
    ContainerMenuComponent,
    ListOfProductsComponent,
    ListOfMenusComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
