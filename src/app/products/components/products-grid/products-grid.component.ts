import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
} from '@angular/core';
import {
  IonCol,
  IonGrid,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonIcon,
  IonButtons,
  IonCardSubtitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { Motorbike } from '../../interfaces/motorbikes.interface';
import { CommonModule } from '@angular/common';
import { MotorbikesSlideComponent } from '../motorbikes-slide/motorbikes-slide.component';
import { ModalController } from '@ionic/angular/standalone';
import { MotorbikesModalComponent } from '../motorbikes-modal/motorbikes-modal.component';

@Component({
  selector: 'products-component-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonCardSubtitle,
    IonButtons,
    IonIcon,
    IonLabel,
    IonButton,
    IonToolbar,
    IonTitle,
    IonRow,
    IonGrid,
    IonCol,
    CommonModule,
    MotorbikesSlideComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsGridComponent {
  private modalCtrl = inject(ModalController);

  motorbikes = input<Motorbike[]>();

  constructor() {}

  async presentModal(motorbikeId: number) {
    const modal = await this.modalCtrl.create({
      component: MotorbikesModalComponent,
      componentProps: {
        motorbikeId,
      },
    });

    await modal.present();
  }
}
