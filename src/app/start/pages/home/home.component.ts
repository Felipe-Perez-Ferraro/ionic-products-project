import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonImg,
  IonLabel,
  IonListHeader,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonRow,
    IonCol,
    IonGrid,
    IonListHeader,
    IonLabel,
    IonImg,
    IonContent,
    IonToolbar,
    IonTitle,
    IonHeader,
    RouterModule,
  ],
})
export class HomeComponent {}
