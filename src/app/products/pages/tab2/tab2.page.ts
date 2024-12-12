import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonImg,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { ProductsService } from '../../service/products.service';
import { Motorbike } from '../../interfaces/motorbikes.interface';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { MotorbikesModalComponent } from '../../components/tab1/motorbikes-modal/motorbikes-modal.component';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonCardHeader,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    HeaderComponent,
    IonContent,
  ],
})
export class Tab2Page implements OnInit {
  private productsService = inject(ProductsService);
  private modalCtrl = inject(ModalController);

  infiniteScroll = viewChild.required(IonInfiniteScroll);

  motorbikes = signal<Motorbike[]>([]);
  page = signal<number>(1);

  constructor() {}

  ngOnInit(): void {
    this.loadMotorbikes();
  }

  loadMotorbikes(): void {
    this.productsService.getMotorbikes().subscribe((res) => {
      this.motorbikes.set(res);
    });
  }

  loadData() {
    this.page.update((value) => value + 1);
    this.productsService
      .loadMoreMotorbikes(this.page())
      .subscribe((res: Motorbike[] | undefined) => {
        if (res) {
          this.motorbikes.set([...this.motorbikes(), ...res]);
          this.infiniteScroll().complete();
        }
        this.infiniteScroll().disabled = true;
      });
  }

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
