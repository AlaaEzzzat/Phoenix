import { Routes, RouterModule } from '@angular/router';
import { MailstonsComponent } from './mailstons/mailstons.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'mailstons',
    component: MailstonsComponent,
  },
];
@NgModule({
  declarations: [ProjectsComponent, MailstonsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsMailstonsModule {}
