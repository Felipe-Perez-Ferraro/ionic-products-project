import { Component, OnInit } from '@angular/core';
import {
  IonLabel,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonListHeader, IonList, IonToolbar, IonHeader, IonIcon, IonLabel],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
