import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  intro: any[];
  drivers: any[];
  constructor() {
    this.intro = [
      'PLSI-FZCO is a private organization based in Dubai Silicon Oasis with affiliate offices in Europe, Middle East, Africa, Asia & GCC,offering a diverse portfolio of services in healthcare and life sciences.',
      'PLSI-FZCO was founded by a group of game changing professionals with a combined set of versatileskillsexpanding over100 yearsfromglobalexperience withinthemultinationalhealthcareindustry in strategy, business innovation solutions & process improvement, change management, governance, risk, compliance & ethics, driving & supporting compliance initiatives then assist in directing and managing policies, procedures, programs and practices to ensure compliant business operations, therefore developing a robust compliance infrastructures, frameworks & systems coupled with periodic auditing. ',
      'Experienced in ERP, Enterprise Architecture, Value Engineering & Collaborative Value Assessment. Extensive experience in reforming & developing healthcare sector/systems, public policies, standards then audit these sectors to comply with international standards therefore being engaged with governments to develop healthcare sectors within the region.',
      "Expertise in project management, turn key & green field hospital development projects, hospital operations, project funding, PPP's,reforminghealthcaresectorsinemerginggrowth markets,humanresources, talentretention, individual staff motivation programs, learning and capability development, succession planning, setting up successful new ventures, business and IT consultancy, business development, emerging markets, governance, risk & compliance, commercial operations and excellence, public & governmentaffairs.",
    ];

    this.drivers = [
      {
        name: 'Innovation',
        text: 'PLSI-FZCO thrives to provide out of the box innovative solutions to our clients',
      },
      {
        name: 'Expertise',
        text: "PLSI-FZCO assigns on-site senior management team member to orchestrate all the managerial and operational details of the healthcare investment with the goal of phasing this team out over a mutually agreed upon timeframe. Therefore, one of the senior management team's priorities is to pass their expertise to local staff through attentive coaching & mentoring until their roles are mastered, thereby building solid local expertise and capacity.",
      },
      {
        name: 'Accountability',
        text: "PLSI-FZCO works with the client to develop solid smart objectives synchronized with the long-term  vision/strategy & developing time linked milestone & KPI's to monitor progress, then provides regular reports to the senior leadership concerning financial, clinical and customer satisfaction performance based upon a value driven proposition.",
      },
      {
        name: 'Culture of Excellence',
        text: 'In order to provide the highest caliber services, top-notch personnel need a nurturing culture to thrive. Therefore, PLSI-FZCO works with the client to establisha culture of excellence through embedding the corporate DNA that is linked to values to shift mindsetsthustransformingpracticetobehavior.Thisgoesbeyonddesirablesalaryandbenefits package to involve an open access to state-of-the-art continuing education & behavior change programs, international accreditation, and a chance to be a part of the standing reputation that accepts nothing less than perfect driven by a highly passionate workforce.',
      },
    ];
  }

  ngOnInit(): void {}
}
