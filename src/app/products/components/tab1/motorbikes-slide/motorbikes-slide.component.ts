import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Image } from '../../../interfaces/motorbikes.interface';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { SlideService } from '../../../service/slide.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'products-component-motorbikes-slide',
  templateUrl: './motorbikes-slide.component.html',
  styleUrls: ['./motorbikes-slide.component.scss'],
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MotorbikesSlideComponent implements OnInit {
  private slideService = inject(SlideService);

  motorbikesImg = input.required<Image[]>();

  private swiperElement = signal<SwiperContainer | null>(null);
  private querySel = signal<string>('.swiper-container-bikesImg');
  private swiperOpt = signal<SwiperOptions>({
    slidesPerView: 1,
    pagination: {
      enabled: true,
    },
  });

  ngOnInit() {
    this.slideService.displayCarouselNodeList(
      this.querySel(),
      this.swiperOpt(),
      this.swiperElement()
    );
  }
}
