import { Component } from '@angular/core';
import { appConstant } from 'src/app/helpers/appConstant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pname: string = 'home';
  companyContact: string = appConstant.companyContact;
}
