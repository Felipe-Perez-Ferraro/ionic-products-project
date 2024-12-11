import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Motorbike } from '../../interfaces/motorbikes.interface';
import { SlideService } from '../../service/slide.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'products-component-banner-slideshow',
  templateUrl: './banner-slideshow.component.html',
  styleUrls: ['./banner-slideshow.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerSlideshowComponent implements OnInit {
  slideService = inject(SlideService);

  motorbikes = input.required<Motorbike[]>();

  swiperElement = signal<SwiperContainer | null>(null);
  querySel = signal<string>('.swiper-container-bikes');
  swiperOpt = signal<SwiperOptions>({
    slidesPerView: 1,
    pagination: {
      enabled: true,
    },
    autoplay: {
      delay: 4000,
    },
  });

  ngOnInit() {
    this.slideService.displayCarousel(
      this.querySel(),
      this.swiperOpt(),
      this.swiperElement()
    );
  }
}
