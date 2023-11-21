import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private displayPopupSubject = new BehaviorSubject<boolean>(false);
  displayPopup$ = this.displayPopupSubject.asObservable();

  showPopup() {
    this.displayPopupSubject.next(true);
  }

  hidePopup() {
    this.displayPopupSubject.next(false);
  }
}
