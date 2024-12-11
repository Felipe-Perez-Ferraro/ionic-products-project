import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowForward,
  cart,
  cartOutline,
  home,
  homeOutline,
  mail,
  mailOutline,
  notificationsOutline,
  person,
  personOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      notificationsOutline,
      homeOutline,
      home,
      personOutline,
      person,
      cartOutline,
      cart,
      mailOutline,
      mail,
      arrowForward,
    });
  }
}
