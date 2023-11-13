import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
