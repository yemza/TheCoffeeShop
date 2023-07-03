import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() : void {}
  toggleCollapseShow(classes : any) : void {
    this.collapseShow = classes;
  }

}
