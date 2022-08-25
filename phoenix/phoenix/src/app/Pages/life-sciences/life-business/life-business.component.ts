import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-business',
  templateUrl: './life-business.component.html',
  styleUrls: ['./life-business.component.css'],
})
export class LifeBusinessComponent implements OnInit {
  modelItems: any[];

  constructor() {
    this.modelItems = [
      {
        title: 'Master Agency',
        desc: [
          'Develop a risk-free business environment. We take care of the overall business aspects based on a net price agreed upon and we build up the local market price adding operating expenses and our margin.',
          'We approach local dealers best fit the portfolio & business objectives using local resources to develop the local market & achieve sales revenue.',
        ],
        image: './../../../../assets/img/master.jpg',
      },
      {
        title: 'Marketing & Sales Promotion',
        desc: [
          'This business model fits a territory already with representation but requires re-activation & business boosting to reach ambitious & achievable sales volumes.',
          'This model is based on commission on sales that covers operating expenses, marketing expenses and our margins.',
        ],
        image: './../../../../assets/img/markting.png',
      },
      {
        title: 'Consultancies',
        desc: [
          'Professional business consultancies in operational, medical, marketing, management & human resources. Includingbusiness assessment.',
          'Support appointing local dealers with optimal resources, infrastructure & distribution channels.',
          'A consultancy fee will apply here for this model.',
        ],
        image: './../../../../assets/img/consulting.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
