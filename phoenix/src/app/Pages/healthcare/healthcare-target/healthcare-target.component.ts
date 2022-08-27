import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthcare-target',
  templateUrl: './healthcare-target.component.html',
  styleUrls: ['./healthcare-target.component.css'],
})
export class HealthcareTargetComponent implements OnInit {
  data: string[];
  constructor() {
    this.data = [
      'Start-up businesses (healthcare Facilities & providers), preferably in the earlier stages of planning and operations.Small &mid-sizedhospitals/businessesmakeupasizable majorityof theEMEA region & international/emerging markets. PLSIFZCO prefers toestablish arelationship with younger operations & continues to nurture that relationship over the long term.',
      'Investors seeking to penetrate the healthcare sector with green field or turn key healthcare development projects.',
      'Functioning hospitals who seek to improve their operations & financial performance.',
      'Multinational Organizations/Hospital Operators; either already existing in the region or planning to penetrate the regional markets especially emerging markets thus attracting  multinational operators interested in penetrating the region.',
      "Public/Government Sector in the region including a potential forPPP's (PublicPrivate Partnerships)",
      ' Improving operational efficiency andprofitabilityof organizations.',
      'Geographically: Europe, Mediterranean, Middle East, Africa GCC and Asia',
    ];
  }

  ngOnInit(): void {}
}
