import { ProjectPlanningComponent } from './Pages/project-planning/project-planning.component';
import { SelectedClientsComponent } from './Pages/selected-clients/selected-clients.component';
import { GeneticComponent } from './Pages/genetic/genetic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Pages/layout/layout.component';
import { HomeComponent } from './Pages/Home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'ContactUS',
        component: ContactComponent,
      },
      {
        path: 'healthcare',
        loadChildren: () =>
          import('src/app/Pages/healthcare/healthcare.module').then(
            (m) => m.HealthcarModule
          ),
      },
      {
        path: 'lifeScience',
        loadChildren: () =>
          import('src/app/Pages/life-sciences/life-sciences.module').then(
            (m) => m.LifeScienceModule
          ),
      },
      { path: 'Genetic', component: GeneticComponent },
      {
        path: 'organization',
        loadChildren: () =>
          import('src/app/Pages/organization/organization.module').then(
            (m) => m.OrganizationModule
          ),
      },
      {
        path: 'projectMailstons',
        loadChildren: () =>
          import(
            'src/app/Pages/projectsMailstons/projectsMailstons.module'
          ).then((m) => m.ProjectsMailstonsModule),
      },
      { path: 'projectPlanning', component: ProjectPlanningComponent },
      { path: 'Clients', component: SelectedClientsComponent },
    ],
  },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
