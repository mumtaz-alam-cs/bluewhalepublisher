import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignSeoComponent } from './web-design-seo.component';

describe('WebDesignSeoComponent', () => {
  let component: WebDesignSeoComponent;
  let fixture: ComponentFixture<WebDesignSeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDesignSeoComponent]
    });
    fixture = TestBed.createComponent(WebDesignSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
