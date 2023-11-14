import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWritingPublicationComponent } from './article-writing-publication.component';

describe('ArticleWritingPublicationComponent', () => {
  let component: ArticleWritingPublicationComponent;
  let fixture: ComponentFixture<ArticleWritingPublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleWritingPublicationComponent]
    });
    fixture = TestBed.createComponent(ArticleWritingPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
