import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../_core/services/product.service";
import {MenuItemDTO} from "../../../_core/models/menu-item-dto";

@Component({
  selector: 'app-container-list-of-product',
  templateUrl: './container-list-of-product.component.html',
  styleUrls: ['./container-list-of-product.component.css']
})
export class ContainerListOfProductComponent implements OnInit {
    listProduct : MenuItemDTO[] =[];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }


  /**
   * get Alll Product
   * */
  getAllProduct():void{
    this.productService.getAllProducts().subscribe((response : MenuItemDTO[])=>{
      this.listProduct = response
    })
  }
}
