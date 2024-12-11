import { Component, inject, OnInit, signal } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { BannerSlideshowComponent } from '../../components/tab1/banner-slideshow/banner-slideshow.component';
import { ProductsGridComponent } from '../../components/tab1/products-grid/products-grid.component';
import { ProductsService } from '../../service/products.service';
import { Motorbike } from '../../interfaces/motorbikes.interface';
import { SearchbarComponent } from 'src/app/shared/components/searchbar/searchbar.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    BannerSlideshowComponent,
    ProductsGridComponent,
    SearchbarComponent,
    HeaderComponent,
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
