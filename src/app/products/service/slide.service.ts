import { Injectable } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Injectable({ providedIn: 'root' })
export class SlideService {
  constructor() {}

  displayCarousel(
    query: string,
    swiperOptions: SwiperOptions,
    swiperElement: SwiperContainer | null
  ) {
    const swiperElementConstructor = document.querySelector(query);

    Object.assign(swiperElementConstructor!, swiperOptions);
    swiperElement = swiperElementConstructor as SwiperContainer;
    swiperElement.initialize();
  }

  displayCarouselNodeList(
    query: string,
    swiperOptions: SwiperOptions,
    swiperElement: SwiperContainer | null
  ) {
    const swiperElementConstructor = document.querySelectorAll(query);

    swiperElementConstructor.forEach((se) => {
      Object.assign(se!, swiperOptions);
      swiperElement = se as SwiperContainer;
      swiperElement.initialize();
    });
  }
}
