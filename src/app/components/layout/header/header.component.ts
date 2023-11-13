import { Component } from '@angular/core';
import { appConstant } from 'src/app/helpers/appConstant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  companyContact: string = appConstant.companyContact;
}
