import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LifeOverviewComponent } from './life-overview/life-overview.component';
import { LifeBusinessComponent } from './life-business/life-business.component';

const routes: Routes = [
  {
    path: 'LifeOverviewComponent',
    component: LifeOverviewComponent,
  },
  {
    path: 'LifeBusinessComponent',
    component: LifeBusinessComponent,
  },
];

@NgModule({
  declarations: [LifeOverviewComponent, LifeBusinessComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LifeScienceModule {}
