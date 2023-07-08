import {Router, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LayoutComponent} from "./_shared/components/layout/layout.component";

const routes : Routes =[
  {path :'' , redirectTo: "/theCoffeeShop" , pathMatch:"full"},
  {
    path : "theCoffeeShop",
    component : LayoutComponent,
    children :[
  {
    path : "",
    loadChildren: () => import("./application/application.module").then(m => m.ApplicationModule)
  },
    ]
  },
  {path : "**" , redirectTo:"/theCoffeeShop" , pathMatch:"full"}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
