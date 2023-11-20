import { Component } from '@angular/core';
import { appConstant } from 'src/app/helpers/appConstant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  address: string = appConstant.address.text;
  about: string = appConstant.about;
  email: string = appConstant.companyEmail;
  socialLinks: any = {
    facebook: "https://www.facebook.com/bluewhalepublishers/",
    instagram: "https://www.instagram.com/bluewhalepublishers/",
    pintrest: "https://www.pinterest.com/bluewhalebookpublishers/",
    trustpolit: "https://www.trustpilot.com/review/bluewhalepublishers.com/",
    bark: "https://www.bark.com/en/us/company/blue-whale-publishers/7bqYb/"
  }
}
