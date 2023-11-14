import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIllustrationComponent } from './book-illustration.component';

describe('BookIllustrationComponent', () => {
  let component: BookIllustrationComponent;
  let fixture: ComponentFixture<BookIllustrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookIllustrationComponent]
    });
    fixture = TestBed.createComponent(BookIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
