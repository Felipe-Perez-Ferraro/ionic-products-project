import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { IonContent, IonLabel } from '@ionic/angular/standalone';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { ProductsService } from '../../service/products.service';
import { Motorbike } from '../../interfaces/motorbikes.interface';
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
  private productsService = inject(ProductsService);

  motorbikes = signal<Motorbike[]>([]);
  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit() {
    this.productsService.getBannerMotorbikes().subscribe((res) => {
      this.motorbikes.set(res);
    });

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
      autoplay: {
        delay: 4000,
      },
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement?.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
