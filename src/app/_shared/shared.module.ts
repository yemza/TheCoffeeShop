import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import {ImageDecoderPipe} from "./pipes/image-decoder.pipe";



@NgModule({
  declarations: [
    SideBarComponent,
    LayoutComponent,
    NavBarComponent,
    ImageDecoderPipe
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports :[
    ImageDecoderPipe
  ]
})
export class SharedModule { }
