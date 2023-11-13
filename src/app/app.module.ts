import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BannerComponent } from './components/layout/banner/banner.component';
import { PrivacypolicyComponent } from './components/pages/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './components/pages/termsandconditions/termsandconditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    TestimonialsComponent,
    AboutusComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
