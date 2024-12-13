import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import {
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonLabel,
  IonItem,
  IonAvatar,
} from '@ionic/angular/standalone';
import { Motorbike } from 'src/app/products/interfaces/motorbikes.interface';
import { ProductsService } from 'src/app/products/service/products.service';
import { ModalController } from '@ionic/angular/standalone';
import { MotorbikesModalComponent } from 'src/app/products/components/tab1/motorbikes-modal/motorbikes-modal.component';

@Component({
  selector: 'shared-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonItem,
    IonLabel,
    IonList,
    IonCol,
    IonRow,
    IonGrid,
    IonSearchbar,
  ],
})
export class SearchbarComponent implements OnInit {
  private productsService = inject(ProductsService);
  private modalController = inject(ModalController);

  searchInpt = viewChild.required(IonSearchbar);

  motorbikes = signal<Motorbike[]>([]);
  motorbikesOpt = signal<Motorbike[]>([]);

  constructor() {}

  ngOnInit() {
    this.productsService.getAllMotorbikes().subscribe((res) => {
      this.motorbikes.set(res);
    });
  }

  searchInput(event: any) {
    const value: string = event.target.value.toLowerCase();

    if (value === '') {
      this.motorbikesOpt.set([]);
      return;
    }

    const filteredRes = this.motorbikes().filter((m) =>
      m.motorbike.toLowerCase().includes(value)
    );
    this.motorbikesOpt.set(filteredRes);
  }

  async presentModal(motorbikeId: number) {
    const modal = await this.modalController.create({
      component: MotorbikesModalComponent,
      componentProps: {
        motorbikeId,
      },
    });

    await modal.present();

    this.searchInpt().value = '';
    this.motorbikesOpt.set([]);
  }
}
