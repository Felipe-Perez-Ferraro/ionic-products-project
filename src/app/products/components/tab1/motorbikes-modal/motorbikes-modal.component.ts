import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { Motorbike } from '../../../interfaces/motorbikes.interface';
import {
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonLabel,
  IonContent,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/standalone';
import { SlideService } from '../../../service/slide.service';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-motorbikes-modal',
  templateUrl: './motorbikes-modal.component.html',
  styleUrls: ['./motorbikes-modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonLabel, IonButton, IonHeader, IonToolbar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MotorbikesModalComponent implements OnInit {
  private productsService = inject(ProductsService);
  private slideService = inject(SlideService);
  private modalController = inject(ModalController);

  motorbikeId = input.required<number>();

  private swiperElement = signal<SwiperContainer | null>(null);
  private querySel = signal<string>('.swiper-container-modalImg');
  private swiperOpt = signal<SwiperOptions>({
    slidesPerView: 1,
    pagination: {
      enabled: true,
    },
    effect: 'coverflow',
  });

  motorbike = signal<Motorbike | null>(null);

  ngOnInit() {
    this.productsService.getMotorbikeById(this.motorbikeId).subscribe((res) => {
      this.motorbike.set(res);
    });

    this.slideService.displayCarousel(
      this.querySel(),
      this.swiperOpt(),
      this.swiperElement()
    );
  }

  cancel(): void {
    this.modalController.dismiss(null, 'cancle');
  }
}
