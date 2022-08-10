import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthcare-overview',
  templateUrl: './healthcare-overview.component.html',
  styleUrls: ['./healthcare-overview.component.css'],
})
export class HealthcareOverviewComponent implements OnInit {
  oneArrow: string = 'fa fa-chevron-up';
  itemOne: boolean = false;

  twoArrow: string = 'fa fa-chevron-down';
  itemTwo: boolean = true;

  threeArrow: string = 'fa fa-chevron-down';
  itemThree: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  myshow(ele: any) {
    if (ele == 'one') {
      this.itemOne = !this.itemOne;
      if (this.oneArrow == 'fa fa-chevron-up') {
        this.oneArrow = 'fa fa-chevron-down';
      } else {
        this.oneArrow = 'fa fa-chevron-up';
      }
    } else if (ele == 'two') {
      this.itemTwo = !this.itemTwo;
      if (this.twoArrow == 'fa fa-chevron-up') {
        this.twoArrow = 'fa fa-chevron-down';
      } else {
        this.twoArrow = 'fa fa-chevron-up';
      }
    } else if (ele == 'three') {
      this.itemThree = !this.itemThree;
      if (this.threeArrow == 'fa fa-chevron-up') {
        this.threeArrow = 'fa fa-chevron-down';
      } else {
        this.threeArrow = 'fa fa-chevron-up';
      }
    }
  }
}
