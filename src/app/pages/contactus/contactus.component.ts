import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent {
  contactForm: FormGroup;
  pname: string = 'contactus';
  submitted: boolean = false;

  contactTestimonials = [
    {
      id: 0,
      thumbnail: 'assets/images/testi-img2.png',
      title: 'Magnificent Work!!',
      description: 'I had an amazing experience working with team Online Book Writers. Everything was smooth and seamless from the initial consultation to the final product. The writers brought my story to life in a way that I never thought possible. Highly recommended!',
      name: 'Rema Larrison',
      authorTrust: 'assets/images/trust-img.png',
    },
    {
      id: 1,
      thumbnail: 'assets/images/testi-img1.png',
      title: 'Flawless Editing Services',
      description: 'The cover design service at this agency is top-notch. The designers truly captured the essence of my book and created a cover that is not only visually stunning but also perfectly represents the content inside.',
      name: 'Hailey Francis',
      authorTrust: 'assets/images/trust-img.png',
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
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

  trackByContactTestimonials = (index: number, item: any) => {
    return item.id;
  };

  constructor(private formBuilder: FormBuilder, private service: ApiServiceService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submitContact() {
    this.submitted = true;

    this.service.createCompany(
      this.contactForm.value.name,
      this.contactForm.value.email,
      this.contactForm.value.phone,
      this.contactForm.value.message,
    )
      .subscribe({
        next: (response: string) => {
          if (!response) return;
        },
        error: (e) => {
        },
        complete: () => {
          // console.log('complete');
        }
      });
  }

}
