import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofreadingComponent } from './proofreading.component';

describe('ProofreadingComponent', () => {
  let component: ProofreadingComponent;
  let fixture: ComponentFixture<ProofreadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProofreadingComponent]
    });
    fixture = TestBed.createComponent(ProofreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
