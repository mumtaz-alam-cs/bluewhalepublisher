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

  clientTestomonials = [
    {
      id: 0,
      thumbnail: 'assets/images/testi-img2.png',
      title: 'Exemplary Editing',
      desciption: 'Thanks to the Blue Whale Publishers team, my manuscript now gleams with excellence. Their meticulous work has elevated my writing to new heights.',
      name: 'John Mitchell',
      autorTrust: 'assets/images/trust-img.png',
    },
    {
      id: 1,
      thumbnail: 'assets/images/testi-img1.png',
      title: 'Compelling Ghostwriting',
      desciption: 'Thanks to the Blue Whale Publishers team, my manuscript now gleams with excellence. Their meticulous work has elevated my writing to new heights.',
      name: 'John Mitchell',
      autorTrust: 'assets/images/trust-img.png',
    }
  ]

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }


  trackByClientsTestomonial = (index: number, item: any) => {
    return item.id;
  }


}
