import { Component } from '@angular/core';

@Component({
  selector: 'app-book-video',
  templateUrl: './book-video.component.html',
  styleUrls: ['./book-video.component.css']
})
export class BookVideoComponent {
  pname: string = 'book-video';

  testomonial = [
    {
      id: 0,
      thumbnail: 'assets/images/testi-img2.png',
      title: 'Magnificent Work!!',
      desciption: 'I had an amazing experience working with team Online Book Writers. Everything was smooth and seamless from the initial consultation to the final product. The writers brought my story to life in a way that I never thought possible.Highly recommended!',
      name: 'Rema Larrison',
      autorTrust: 'assets/images/trust-img.png',
    },
    {
      id: 1,
      thumbnail: 'assets/images/testi-img1.png',
      title: 'Flawless Editing Services',
      desciption: 'The cover design service at this agency is top-notch. The designers truly captured the essence of my book and created a cover that is not only visually stunning but also perfectly represents the content inside.',
      name: 'Hailey Francis',
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


  trackByTestomonial = (index: number, item: any) => {
    return item.id;
  }
}
