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
}
