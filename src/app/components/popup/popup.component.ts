import { Component, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  popupShown: boolean = false;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
    // Display the popup after 5 seconds
    setTimeout(() => {
      if (!this.popupShown) {
        this.renderer.setStyle(
          document.querySelector('.popupform-main-new-popup'),
          'display',
          'flex'
        );

        // Set the flag to indicate that the popup has been shown
        this.popupShown = true;
      }
    }, 5000);

    // Subscribe to router events to re-render on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.popupShown = false;
        setTimeout(() => {
          if (!this.popupShown) {
            this.renderer.setStyle(
              document.querySelector('.popupform-main-new-popup'),
              'display',
              'flex'
            );

            // Set the flag to indicate that the popup has been shown
            this.popupShown = true;
          }
        }, 5000);
        // Add logic to re-render or reset the popup as needed
        // For example, you could set this.popupShown to false
        // and hide the popup in ngAfterViewInit or ngOnInit.
      }
    });
  }

  closePopup() {
    this.renderer.setStyle(document.querySelector('.popupform-main-new-popup'), 'display', 'none');
  }
}
