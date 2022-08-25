import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css'],
})
export class RiskComponent implements OnInit {
  data: string[];
  constructor() {
    this.data = [
      'Developing & supporting business & corporate compliance initiatives then assist in directing & managing policies, procedures, programs & practices to ensure compliant business operations, therefore developing a robust compliance infrastructure, framework & coupled with periodic auditing. Extensive experience in reforming & developing healthcare sector/systems, policies, standards & guidelines then audit these sectors to comply with international standards therefore being engaged with governments to develop healthcare sectors within the region.',
      'Extensive experience in conducting ERM, risk assessment, gap analysis, due diligence, developing robust governance & compliance frameworks, reforming & developing hospitals, healthcare systems, quality policies, standards & guidelines then audit these sectors to comply with international standards & best practices therefore being engaged with governments to develop healthcare sectors within the region.',
      'Regular use of the account policy matrix & other tools for value-based selling & transformed the mindset of organizations from selling/promoting products & services to offering perceivable value for targeted clients & patients.',
    ];
  }

  ngOnInit(): void {}
}
