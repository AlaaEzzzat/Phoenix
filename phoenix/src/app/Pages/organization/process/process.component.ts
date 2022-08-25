import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
})
export class ProcessComponent implements OnInit {
  data: string[];
  constructor() {
    this.data = [
      "Create an environment which is consistent with the organization's values and objectives.",
      'Support achieving financial & customer service goals.',
      'Provide leadership and serve as a mentor & coach to Managers and staff.',
      'Support the clinical operation strategic mission.',
      'Support developing policies & programs that promote the corporate DNA culture and vision.',
      'Organizational change management programs & transformational processes.',
      'Support developing training programs to achieve positive patient outcomes, employee satisfaction, customer service.',
      "Assess, monitor, coach & develop managers' skill levels to ensure they meet technical & Soft skill quality standards.",
      'Support developing business development strategies & set comprehensive goals for performance and growth.',
      'Support HR with staff development, motivation & talent retention programs as part of the people management cycle. Lead employees to encourage maximum performance and dedication.',
      'Drive Lean Six Sigma initiatives for process improvement therefore relying upon dashboards, DMAIC, FMEA & RCA tools for tracking gaps, non-conformities, quality & process improvement.',
      'Driving business transformation, streamlining operations and applying new solutions to simplify business processes to deliver on strategic objectives and critical initiatives.',
      'Identify areas for employing, building & driving improvements in internal and external communication, leveraging lessons learned & applying technology solutions to establish cutting edge practices.',
      'Collaborate with leadership team & C-suite of diverse operational functions i.e. HR, IT, Finance, Procurement, Nursing, Medical Records, Admissions, Operating Theatre, OPC, Revenue Cycle, Insurance, etc.',
      "supporting their daily duties & accountability to achieve the hospital's overall strategic & organizational objectives and delivery of quality healthcare services thus achieving optimal operational excellence.",
      'Evaluate performance by analyzing and interpreting data and metrics.',
      'Change management initiatives, programs & executions across the organization.',
      'Develop operational policies. Drive the GRC & ethics program across the organization.',
      'Effectively engage across all corporate and service delivery functions to ensure there are robust processes in place to agree and meet financial and activity targets for each fiscal year and outline for future years.',
      'Drive cost savings and revenue improvement through strategic financial & operational planning that positively reflect on clinical practice, patient experience & satisfaction thus translating services offered into perceivable value.',
      'Identify areas to provide creative solutions for solving complex operational, business & clinical challenges by leveraging organizational effectiveness, process alignment, transparency, and accountability.',
      'Develop new service lines that complement the existing business models of the hospital. Lead clinical efficiencies & service improvement programs to raise the standards of practice, productivity and value for money offered.',
      'Innovating & delivering solutions at the intersection of technology & clinical operations to transform business & healthcare operations, while paving the pathway for innovative solutions for patients, clinical & administrative staff.',
      'Support executive leadership committees in charting a strategic course in response to the developing needs of the government, market, region & changes in the healthcare industry.',
      'Contribute to expansion strategies & activities (investments, acquisitions, corporate alliances).',
      'Access, bridge & influence both the operational and executive levels across the organization',
      'Key liaison to functional leaders & their departments/business units.',
      'Bring cross-functional teams together to ensure organizational & project objectives are clearly defined and achieved while business operations and processes are continually refined, to enable successful sustainability and scalability.',
      'Driving innovative solutions & spearheading integration of health technologies(i.e., data, wearable devices, clinical devices, sensors and applications, etc.) & transformational technologies (e.g. AI).',
      'Driving force for cross-departmental innovative solutions by guiding functional leaders to execute pilot solutions. Identify and implement continuous improvement activities, producing tangible outcomes and overall process harmonization.',
      'Facilitate planning, prioritization, change management & reporting between groups to deliver successful outcomes.',
      'Serve as Innovation liaison to key functional areas for identifying opportunities to improve outcomes related to clinical practice and business operations.',
      "Support driving 'Outside-In' and creative thinking, coordinate engagements with external innovation companies/consultancies.",
      'Guide functional leaders as a thought leader and SME to innovate at the intersection of technology clinical practice and business operations to propose and execute on critical projects.',
      'Leadership & support on pilots, prototypes, and in beta testing that validate & explore ideas to improve how the organization conducts & improves its general business practices.',
      'Promote positive organizational change serving as a change agent to ensure successful engagement of teams and the deliverable of initiatives on time and on budget.',
      "Liaise with corporate quality to develop & periodically revise measurable KPI's & objectives to monitor performance, growth, monitor, track & address KPI trends.",
      'Leverage solutions and contribute to the business results as defined in corporate goals and support implementing innovative approaches in day-to-day clinical practice & hospital operations.',
      "Serve as subject matter expert (SME) with academic and technology organizations to identify clinical and business operation opportunities to increase the organization's probability of success in bringing improved treatment options to patients/caregivers/providers/payers.",
    ];
  }

  ngOnInit(): void {}
}
