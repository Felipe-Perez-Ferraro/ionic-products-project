import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  signal,
} from '@angular/core';
import { IonContent, IonLabel } from '@ionic/angular/standalone';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'products-component-banner-slideshow',
  templateUrl: './banner-slideshow.component.html',
  styleUrls: ['./banner-slideshow.component.scss'],
  standalone: true,
  imports: [IonContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerSlideshowComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);

  constructor() {}

  ngOnInit() {
    this.displayCarousel();
  }

  private displayCarousel() {
    const swiperElementConstructor = document.querySelector(
      '.swiper-container-bikes'
    );
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      pagination: {
        enabled: true,
      },
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement?.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
