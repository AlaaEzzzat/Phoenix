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
