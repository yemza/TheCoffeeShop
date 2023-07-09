import {Component, Input, OnInit} from '@angular/core';
import {MenuItemDTO} from "../../../../_core/models/menu-item-dto";

@Component({
  selector: 'app-list-of-product',
  templateUrl: './list-of-product.component.html',
  styleUrls: ['./list-of-product.component.css']
})
export class ListOfProductComponent implements OnInit {
  color = 'light';
  @Input() listProduct : MenuItemDTO[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
