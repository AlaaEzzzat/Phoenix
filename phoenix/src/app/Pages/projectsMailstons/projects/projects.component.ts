import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  data: any[];
  countries: any[];
  constructor() {
    this.data = [
      "Turnkeydevelopment of 8 satellite cancer centers across Egypt, including the infrastructure, network & capability development of the operating & managing staff then introducing use of the CanReg version III software for capturing the data on cancer prevalence & creating the first national cancer database to be further developed into Egypt's National Cancer Registry.",
      'Consulting in developing, restructuring, rebranding & the interim management of many large hospitals in EMEA, Asia & Latin America, starting with in depth gap analysis & due diligence, creating a vision & strategy then managing these challenged hospitals through undertaking full interim management (for a minimum period of 18-24 months) & operations with the full authority to hire & fire. The functions I have personally contributed with my expertise in the following areas: strategy, organizational development, business innovations & creative solutions, ERM then developing an organizational governance, compliance & ethics framework, HR, L&D, hospital & clinical operations/practice, Trauma & ER, quality management, accreditation, operating theatre & biomedical lifecycle management. We have successfully transformed near to bankrupt hospitals into highly profitable healthcare organizations',
      'Develop & conduct quality in healthcare workshops for all government hospitals in the UAE.',
      'Digital transformation & process improvement of the entire hospital application process for the technical licensing committee within the UAE government.',
      "Develop the e-referral system & inter hospital transfer emergency patient transfer for critically ill patients with the UAE Inter Hospital Emergency Patient Transfer policy. Digital transformation, processes engineering, develop governing SOP's, check lists, audit tool & web based electronic reporting/referral platform for hospitals to facilitate safe inter-hospital referral/transfer of emergency patients in need of critical care then automate the entire system to enhance this service within the UAE.",
      'Developing the e-KAM system (Electronic Key Account Management System) a user friendly yet highly complex cloud-based software to monitor key accounts across a diverse geographical territory of 39 countries i.e. level of investment, competitive analysis & investment, competitive activities, volume of sales, annual turnover & ROI, studies engaged in, educational & promotional activities, etc. This system can be monitored on a local, state & regional level.',
      " Develop a digital platform for the hospital e-rating tool to rate the quality of care in hospitals towards patients based upon specific parameters, benchmarks, KPI's & outcomes.",
      'Process improvement & developing the cancer screening program, digital audit process for breast, cervical and colorectal cancers.',
      "Digital platform development & process engineering to execute the telemedicine platform with Daman Health Insurance to relieve the burden on waiting times in PHC's & economic burden on healthcare expenditure. ",
      'Draft & review health policies, standards & guidelines for specific areas within the government i.e. Ambulance, IVF, clinical research in human subjects, emergency transfer of critical patients, telemedicine, and dialysis. The Ambulance & Emergency patient referral standard was co-developed with the Abu Dhabi General Police HQ.',
      ' Engage in developing healthcare strategy & vision for Abu Dhabi with the UPC based on gap analysis, population increase & disease evolution until 2030.',
      'Member of the core team that established the 300-bed Children Cancer Hospital in Cairo (57357).',
      'Developing the National Family Planning program for Egypt.',
      'Electronic Field Force Effectiveness Program (E-Effectiveness). Establishing a baseline level of competency assessment for front line field force over a diverse geographical region of countries using a self-developed innovative online assessment tool focusing on medical, marketing, competitive intelligence, product knowledge then synchronizing a planned objective electronic development program across the region to address gaps in these competencies to preserve their level of knowledge & soft skills.',
    ];
    this.countries = [
      {
        state: 'EGYPT',
        text: [
          'Egyptian Center for Research & Regenerative Medicine [ECRRM] - Ongoing. Green field development of a comprehensive R&D facility focusing on stem cell based regenerative cures and solutions, including an R&D facility, animal house, clinical trial building & bioreactor. In collaboration with the Armed Forces of Egypt. ',
          'Green field development of a Conformity & Reference lab as part of a reference standards authority[in process]. In collaboration with the Medical Services of the Armed Forces of Egypt.',
          'Global Medical City Egypt [300-acre plot of land, project cost = $2Bln] = schools for medicine, dentistry, pharmacy, nursing public health, institute for hospital management, healthcare administration, healthcare IT, healthcare informatics & analytics, health insurance, 400 bed university hospital, training & simulation center, 12centers of excellence with a total of 1200 beds, housing complex for working staff, international conference center, 2 hotels, guest house, commercial complex & retail outlets.',
          'Aphrodite Wellness & Rehabilitation Park, Ras Al Hekma [Master Planning], 1.2 millionSQM plot of land, project cost = $600 million] = training & simulation center, 8 centers of excellence with a total of 400 beds, housing complex for working staff, international conference center, 2 hotels, guest house, residential units for assisted living, commercial complex & retail outlets.',
          'DAVINCI 1 Wellness, ONE day Surgery Center.',
          'Alexandria Medical Park [Master Planning], 237 bed hospital in Alexandria with 6 centers of excellence & 100 outpatient clinics.',
          "Medical City [CONFIDENTIAL] with doctor's plaza, multiple centers of excellence & 25 operating theatres [2000 beds].",
          'Cancer Network [CONFIDENTIAL], with a 200-bed hub hospital and multiple spoke ambulatory cancer care centers',
          'Medical teaching facility with 400 beds.',
        ],
      },
      {
        state: 'CYPRUS',
        text: [
          ' International Wellness & Rehabilitation Park [1.3 million SQM plot of land, project cost = $700 million] = schools for nursing public health, institute for hospital management, healthcare administration, healthcare IT, healthcare informatics & analytics, health insurance, training & simulation center, 10 centers of excellence with a total of 800 beds, housing complex for working staff, international conference center, 2 hotels, guest house, residential units for assisted living, commercial complex & retail outlets. ',
        ],
      },
      {
        state: 'LEBANON',
        text: [
          "60'Bed'Hospital'in'Jounieh with'expansion'to'100",
          "64'Bed'Rehabilitation'Center'in'Ghosta",
          "300'Bed'Future'Hospital'in'Zahle",
          'Hospital Commissioning',
        ],
      },
      {
        state: 'UAE',
        text: [
          "Manazel Medical City Complex [project cost = $889M] = master planning, medical planning, and design of 110,000 SQM medical complex that includes 355 beds, school for children with autism & learning disabilities, cancer center, medical office building [130 OPC's], IP/OP rehabilitation & stroke center with IR.",
          'Danat al Emarat: 45,000 SQM dedicated for the treatment of women and children hospital master planning. It includes 130 beds, five operating rooms, mother and baby unit, and a 15-bassinet NICU.',
        ],
      },
      {
        state: 'IRAQ (ERBIL)',
        text: [
          'Kurdistan Medical City: master planning, medical planning, of 380,000 SQM medical city that includes medical university, 450 beds, medical office building, housing for staff and students, and a community outreach center. ',
        ],
      },
      {
        state: 'JORDAN',
        text: [
          ' King Hussein Cancer Center: 51,097 SQM cancer center that includes 192 pediatric inpatient rooms it also includes a comprehensive diagnostic and treatment facilities, and research center. 180 bed rehabilitation facility',
        ],
      },
      {
        state: 'LIBYA',
        text: [
          'Rapid Response Hospital. This program was designed to make immediate and sustainable improvements in healthcare in Tripoli to reduce "medical tourism" and to enhance the image of Libyan healthcare. Although the program was interrupted by the collapse of the Libyan government, the methodologies were proven to be both sound and effective.',
        ],
      },
      {
        state: 'GHANA',
        text: [
          ' Strengthening Health Programs. The project is providing technical assistance, training, operational research and evaluations to promote effective use of health sector resources and support evidence-based programming decisions within health facilities across Ghana. ',
        ],
      },
      {
        state: 'NIGERIA',
        text: [
          'Veterans Hospitals and Wellness Center Project. Four 200 bed hospitals for the Ministry of Defense in Abuja. Business case validation, concept & detailed designs, project management, supervision of construction, equipping the hospitals, recruiting and training hospital personnel, hospital management & operations.',
        ],
      },
      {
        state: 'ETHIOPIA',
        text: [
          ' Planning, pre-operations planning, commissioning, management, equipment planning and procurement, financing support and training of staff of a medical complex including 310-bed hospital, cancer center, cyclotron, hotel, conference center and school of nursing.',
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
