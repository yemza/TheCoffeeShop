import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-product',
  templateUrl: './list-of-product.component.html',
  styleUrls: ['./list-of-product.component.css']
})
export class ListOfProductComponent implements OnInit {
  color = 'light';
  constructor() { }

  ngOnInit(): void {
  }

}
