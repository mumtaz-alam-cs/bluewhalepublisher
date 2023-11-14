import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookWritingComponent } from './ebook-writing.component';

describe('EbookWritingComponent', () => {
  let component: EbookWritingComponent;
  let fixture: ComponentFixture<EbookWritingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EbookWritingComponent]
    });
    fixture = TestBed.createComponent(EbookWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
