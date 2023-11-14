import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookGhostwritingComponent } from './ebook-ghostwriting.component';

describe('EbookGhostwritingComponent', () => {
  let component: EbookGhostwritingComponent;
  let fixture: ComponentFixture<EbookGhostwritingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EbookGhostwritingComponent]
    });
    fixture = TestBed.createComponent(EbookGhostwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
