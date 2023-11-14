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
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EbookWritingComponent } from './pages/services/ebook-writing/ebook-writing.component';
import { BookCoverComponent } from './pages/services/book-cover/book-cover.component';
import { BookVideoComponent } from './pages/services/book-video/book-video.component';
import { MarketingComponent } from './pages/services/marketing/marketing.component';
import { PublishingComponent } from './pages/services/publishing/publishing.component';
import { EbookGhostwritingComponent } from './pages/services/ebook-ghostwriting/ebook-ghostwriting.component';
import { AudioBooksComponent } from './pages/services/audio-books/audio-books.component';
import { WebDesignSeoComponent } from './pages/services/web-design-seo/web-design-seo.component';
import { BookIllustrationComponent } from './pages/services/book-illustration/book-illustration.component';
import { ProofreadingComponent } from './pages/services/proofreading/proofreading.component';
import { ArticleWritingPublicationComponent } from './pages/services/article-writing-publication/article-writing-publication.component';
import { BookPrintingComponent } from './pages/services/book-printing/book-printing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    TermsAndConditionsComponent,
    EbookWritingComponent,
    BookCoverComponent,
    BookVideoComponent,
    MarketingComponent,
    PublishingComponent,
    EbookGhostwritingComponent,
    AudioBooksComponent,
    WebDesignSeoComponent,
    BookIllustrationComponent,
    ProofreadingComponent,
    ArticleWritingPublicationComponent,
    BookPrintingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
