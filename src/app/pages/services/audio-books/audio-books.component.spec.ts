import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBooksComponent } from './audio-books.component';

describe('AudioBooksComponent', () => {
  let component: AudioBooksComponent;
  let fixture: ComponentFixture<AudioBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioBooksComponent]
    });
    fixture = TestBed.createComponent(AudioBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
