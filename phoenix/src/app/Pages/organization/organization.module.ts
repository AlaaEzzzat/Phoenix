import { Routes, RouterModule } from '@angular/router';
import { RiskComponent } from './risk/risk.component';
import { ProcessComponent } from './process/process.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'risk',
    component: RiskComponent,
  },
  {
    path: 'process',
    component: ProcessComponent,
  },
];
@NgModule({
  declarations: [ProcessComponent, RiskComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrganizationModule {}
