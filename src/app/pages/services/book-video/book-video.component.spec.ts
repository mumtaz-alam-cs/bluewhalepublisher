import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookVideoComponent } from './book-video.component';

describe('BookVideoComponent', () => {
  let component: BookVideoComponent;
  let fixture: ComponentFixture<BookVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookVideoComponent]
    });
    fixture = TestBed.createComponent(BookVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
