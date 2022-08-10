import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-overview',
  templateUrl: './life-overview.component.html',
  styleUrls: ['./life-overview.component.css'],
})
export class LifeOverviewComponent implements OnInit {
  lifeItem: string[];
  constructor() {
    this.lifeItem = [
      'Business Strategy.',
      ' Management & Human Resources.',
      'Sales Force Effectiveness & training.',
      ' Develop marketing & launch plans, starting with the most potential key markets to generate profitable revenue & sustainability then gradually set up the business in other markets.',
      'Develop & implement e-KAM & territory management systems to monitor progress, expenditure, profitability & achievement.',
      ' Commercial operations, supervising sales achievements & activities of local dealers to achieve the annual sales target & sustain continuous growth.',
      'Corporate & Business, Governance, Risk, Compliance & Ethics',
      "Appoint local dealers 'best fit' with optimal distribution channels in each local market.",
      ' Marketing & developing promotional material for markets, even in local language.',
      'Business development in emerging markets where we have an excellent network of contacts & access.',
      'Post marketing surveillance of products launched (pharmacovigilance & medical device vigilance).',
      'Develop & manage key opinion leader & advocate networks.',
      'Organize & conduct activities, meetings, launch events, etc.',
      'Public & Government Affairs.',
      'Medical affairs, clinical operations & compliance support.',
      'Market Access & Regulatory Affairs.',
      'Order handling and logistics support.',
      'Financial & IT Support',
    ];
  }

  ngOnInit(): void {}
}
