import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SideBarComponent,
    LayoutComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports :[

  ]
})
export class SharedModule { }
