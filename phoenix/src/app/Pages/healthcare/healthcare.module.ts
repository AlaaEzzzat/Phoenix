import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HealthcareOverviewComponent } from './healthcare-overview/healthcare-overview.component';
import { HealthcareTargetComponent } from './healthcare-target/healthcare-target.component';
import { HealthcareServicesComponent } from './healthcare-services/healthcare-services.component';

const routes: Routes = [
  {
    path: 'healthcareOverview',
    component: HealthcareOverviewComponent,
  },
  {
    path: 'healthcareTarget',
    component: HealthcareTargetComponent,
  },
  {
    path: 'healthcareServices',
    component: HealthcareServicesComponent,
  },
];

@NgModule({
  declarations: [
    HealthcareOverviewComponent,
    HealthcareTargetComponent,
    HealthcareServicesComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HealthcarModule {}
