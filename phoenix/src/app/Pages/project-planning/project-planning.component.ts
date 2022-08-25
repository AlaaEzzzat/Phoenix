import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-planning',
  templateUrl: './project-planning.component.html',
  styleUrls: ['./project-planning.component.css'],
})
export class ProjectPlanningComponent implements OnInit {
  data: any[];
  constructor() {
    this.data = [
      {
        title: 'Strategic Planning',
        content:
          'Assisting organizations in defining their vision first then developing a strategy or direction and allocating their resources to achieve their objectives, then, together, develop a meticulous plan for implementing the agreed upon strategy.',
      },
      {
        title: 'Feasibility Study and Business Planning:',
        content:
          'Once the ultimate vision is refined and consensus is reached, we assist our clients in completing a feasibility study and business plan based on defining the target market, determining realistic use rates, and projecting the market share. Once these steps are completed, the detailed business plan can be developed.',
      },
      {
        title: 'Operations Improvement',
        content:
          'Optimizing operations to meet utilization goals, our process involves conducting a detailed assessment, defining recommended improvements based on best practices and developing a detailed action plan for implementation.',
      },
      {
        title: 'Facility Planning',
        content:
          'We believe that facility planning is a natural extension of the strategic planning process completed in the first phase of planning. We utilize an operations-based approach to deliver safe and efficient care',
      },
      {
        title: 'Site and Facility Master Planning',
        content:
          ': Often completed in conjunction with an architectural firm, this activity includes developing a site utilization plan, preparing an organized plan for developing facilities on the site and assembling a detailed phasing plan',
      },
      {
        title: 'Functional Programming',
        content:
          ' Developing a detailed operational plan for proposed departments and documenting the proposed optimal characteristics or operational systems (e.g., scope of services, hours of operation, workload volumes, staffing, operational systems, functional relationships, design considerations).',
      },
      {
        title: 'Space Programming',
        content:
          'Based on the functional program, this step involves developing a room-by-room space listing documenting the quantity of each type of room, the recommended size and any special requirements.',
      },
      {
        title: 'Equipment Planning & Biomedical Life Cycle Management',
        content:
          "This service is for projects that need equipment assessment, which we handle using surveys of existing equipment to evaluate their reuse potential and identifying new equipment requirements. We also facilitate procurement, acquisition, delivery, installation, calibration, PPM's & quality management",
      },
      {
        title: 'Information Technology Planning',
        content:
          'Because information technology is becoming an increasingly important component of healthcare delivery planning; we assist clients with identifying needs, selecting vendors, overseeing implementation and validating complete and proper installation',
      },
      {
        title: 'Pre-Opening Planning and Commissioning',
        content:
          'These PLSI-FZCO services support clients in preparing for the opening of a new or renovated facility. Typically, services begin one to two years before the scheduled opening depending on the size of the facility. In this phase, significant investment is made in careful planning to ensure flawless mastery in patient care delivery.',
      },
      {
        title: 'Pre-Opening Planning',
        content:
          ": In this crucial phase, the organizational blueprint for the facility is developed. This includes the organizational policies and procedures as well as each department's individual operating plan, which is the comes from a team of PLSI-FZCO specialized professionals contributing with their expertise to complete the operating plan.",
      },
      {
        title: 'Commissioning',
        content:
          "Begins approximately three to six months prior to the opening, PLSI-FZCO's commissioning phase is the coordination all activities related to the medical facility's activation and occupancy. These activities include final cleaning, placement of all furniture and equipment, staff hiring and training, simulations and mock audits & drills, acquiring the necessary permits, licenses and testing of emergency and safety procedures",
      },
      {
        title: 'Opening',
        content:
          'This is when the hospital services are initiated and open to the public through a comprehensive value driven PR awareness campaign. Significant efforts are invested to address issues that may arise so that care is delivered seamlessly to patients.',
      },
    ];
  }

  ngOnInit(): void {}
}
