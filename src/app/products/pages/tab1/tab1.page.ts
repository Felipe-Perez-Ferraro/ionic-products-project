import { Component } from '@angular/core';
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
  ],
})
export class Tab1Page {
  constructor() {}
}
