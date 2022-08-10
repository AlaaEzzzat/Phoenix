import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  healthArrow: string = 'fa fa-chevron-down';
  healthcare: boolean = true;

  lifeArrow: string = 'fa fa-chevron-down';
  life: boolean = true;

  OrganizationalArrow: string = 'fa fa-chevron-down';
  Organization: boolean = true;

  projectArrow: string = 'fa fa-chevron-down';
  projects: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  myshow(ele: any) {
    if (ele == 'project') {
      this.projects = !this.projects;
      if (this.projectArrow == 'fa fa-chevron-up') {
        this.projectArrow = 'fa fa-chevron-down';
      } else {
        this.projectArrow = 'fa fa-chevron-up';
      }
    } else if (ele == 'health') {
      this.healthcare = !this.healthcare;
      console.log('health');
      if (this.healthArrow == 'fa fa-chevron-up') {
        this.healthArrow = 'fa fa-chevron-down';
      } else {
        this.healthArrow = 'fa fa-chevron-up';
      }
    } else if (ele == 'lifeCycle') {
      this.life = !this.life;
      if (this.lifeArrow == 'fa fa-chevron-up') {
        this.lifeArrow = 'fa fa-chevron-down';
      } else {
        this.lifeArrow = 'fa fa-chevron-up';
      }
    } else if (ele == 'Organizational') {
      this.Organization = !this.Organization;
      if (this.OrganizationalArrow == 'fa fa-chevron-up') {
        this.OrganizationalArrow = 'fa fa-chevron-down';
      } else {
        this.OrganizationalArrow = 'fa fa-chevron-up';
      }
    }
  }
}
