import { Component, OnInit } from '@angular/core';
import {
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

@Component({
  selector: 'shared-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonSearchbar],
})
export class SearchbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
