import { Component, inject, OnInit, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonListHeader,
  IonLabel,
  IonIcon,
  IonList,
} from '@ionic/angular/standalone';
import { BannerSlideshowComponent } from '../../components/banner-slideshow/banner-slideshow.component';
import { ProductsGridComponent } from '../../components/products-grid/products-grid.component';
import { ProductsService } from '../../service/products.service';
import { Motorbike } from '../../interfaces/motorbikes.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonIcon,
    IonLabel,
    IonListHeader,
    IonHeader,
    IonToolbar,
    IonContent,
    BannerSlideshowComponent,
    ProductsGridComponent,
  ],
})
export class Tab1Page implements OnInit {
  private productsService = inject(ProductsService);

  motorbikes = signal<Motorbike[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.productsService.getBannerMotorbikes().subscribe((res) => {
      this.motorbikes.set(res);
    });
  }
}
