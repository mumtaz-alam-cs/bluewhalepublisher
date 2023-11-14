import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EbookWritingComponent } from '../pages/services/ebook-writing/ebook-writing.component';
import { BookCoverComponent } from '../pages/services/book-cover/book-cover.component';
import { BookVideoComponent } from '../pages/services/book-video/book-video.component';
import { MarketingComponent } from '../pages/services/marketing/marketing.component';
import { PublishingComponent } from '../pages/services/publishing/publishing.component';
import { EbookGhostwritingComponent } from '../pages/services/ebook-ghostwriting/ebook-ghostwriting.component';
import { AudioBooksComponent } from '../pages/services/audio-books/audio-books.component';
import { WebDesignSeoComponent } from '../pages/services/web-design-seo/web-design-seo.component';
import { BookIllustrationComponent } from '../pages/services/book-illustration/book-illustration.component';
import { ProofreadingComponent } from '../pages/services/proofreading/proofreading.component';
import { ArticleWritingPublicationComponent } from '../pages/services/article-writing-publication/article-writing-publication.component';
import { BookPrintingComponent } from '../pages/services/book-printing/book-printing.component';

const routes: Routes = [
  {
    path: 'ebook-writing',
    component: EbookWritingComponent,
  },
  {
    path: 'book-cover',
    component: BookCoverComponent,
  },
  {
    path: 'book-video',
    component: BookVideoComponent,
  },
  {
    path: 'marketing',
    component: MarketingComponent,
  },
  {
    path: 'publishing',
    component: PublishingComponent,
  },
  {
    path: 'ebook-ghostwriting',
    component: EbookGhostwritingComponent,
  },
  {
    path: 'audio-books',
    component: AudioBooksComponent,
  },
  {
    path: 'web-design-seo',
    component: WebDesignSeoComponent,
  },
  {
    path: 'book-illustration',
    component: BookIllustrationComponent,
  },
  {
    path: 'proofreading',
    component: ProofreadingComponent,
  },
  {
    path: 'article-writing-publication',
    component: ArticleWritingPublicationComponent,
  },
  {
    path: 'book-printing',
    component: BookPrintingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
