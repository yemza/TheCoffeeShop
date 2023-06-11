import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../_shared/shared.module";
import { ApplicationRoutingModule } from './application-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationRoutingModule,
  ]
})
export class ApplicationModule { }
