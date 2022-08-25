import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-clients',
  templateUrl: './selected-clients.component.html',
  styleUrls: ['./selected-clients.component.css'],
})
export class SelectedClientsComponent implements OnInit {
  healthcare: string[];
  lifeScience: string[];
  constructor() {
    this.healthcare = [
      'Armed Forces of Egypt - Green field development of multiple projects.',
      'Manazel Real Estate -green field project development',
      'Al Ain Hospital - Operational quality management, process & hospital operational improvement.',
      'MEC KSA - quality management, organizational development, business Innovation, process & hospital operational improvement.',
      'Vamed - green field project development & project management consultation. Business Innovation, process & hospital operational improvement.',
      'American Hospital Management Company - green field healthcare development & project management.',
      'Tawam Hospital - Operational quality management, process & hospital operational improvement.',
      'Corniche Hospital - Quality management, organizational development, business Innovation, process & hospital operational improvement.',
      'Sheikh Khalifa Medical City - Operational quality management, process & hospital operational improvement.',
      'Dubai Heath Authority - Public policy development & quality management + medical tourism strategy & program.',
      'Mediclinic Hospitals [Formerly Al Noor Hospitals] - Quality management, business Innovation, process & hospitaloperational improvement.',
      'Abu Dhabi Police HQ - green field project development + Operational quality management & improvement',
      'Cleveland Clinic Abu Dhabi -green field project development, quality management, organizational development, business Innovation, process & hospital operational improvement.',
      'Everlast Wellness Center - green field project development + quality management, organizational development, business Innovation, process & hospital operational improvement.',
      'Apollonion Hospital Cyprus - Quality management, organizational development, business Innovation, process & hospital operational improvement.',
      'ADNOC - green field project development + Operational quality management & improvement.',
      'PWC [Price WaterHouse Coopers] - Healthcare consultation for green field project development.',
      'Fakih IVF - green field project development + Operational quality management & improvement',
      'Al Joud Investments Dubai - green field project development & market access.',
      'LifeLine Cord Blood, Cord Tissue Cryopreservation & Regenerative Medicine.',
      'Cancer Center - Nicosia Cyprus - Quality management,Constanta Romania - green field project development, organizational development, business Innovation, process & hospital operational improvement.',
      'Elyzee One Day Surgery - green field project development, quality management, organizational development, business Innovation, process & hospital operational improvement.',
      'General Hospital - Nicosia Cyprus - Quality management, organizational development, business Innovation, process & hospital operational improvement.',
      'Aretaeio Hospital Cyprus - Quality management, organizational development, business Innovation, process & hospital operational improvement.',
      "Ministry of Health Yemen, Iran, Jordan, Lebanon, UAE, Egypt, Syria - Socio economic development executing the UN's MDG's & SDG's",
      'MOH Jordan - PPP with USAID for improving public hospital operation performance & improving counselling skills of physicians.',
      'Bareen International Hospital - green field project development + quality management, organizational development, business Innovation, process & hospital operational improvement.',
      'Bourne Hall IVF - green field project development + quality management, organizational development, business Innovation, process & hospital operational improvement',
      'Department of Health Abu Dhabi [Formerly Heath Authority Abu Dhabi - HAAD] - Public policy development & quality management + digital transformation, digital platform development & process engineering + medical tourism strategy & program.',
      'MedCare IVF - green field projectdevelopment + Operational quality management & improvement',
    ];
    this.lifeScience = [
      'Biogenerics Pharma - Market access consultation.',
      'Alexion - Market access consultation.',
      'RF Systems Japan - Market access consultation.',
      'Protherics - BTG (British Biotechnology Group) - Market access consultation.',
      'Biopharma Middle East - green field project development & market access.',
      'Millensys - market access & organizational development.',
      'BBT - PHARE - market access consultation.',
      'GSK - organizational development.',
      'Kuwait Life Science Corporation Kuwait Life Science Academy - green field project development.',
    ];
  }

  ngOnInit(): void {}
}
