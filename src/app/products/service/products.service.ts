import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Motorbike,
  MotorbikeResponse,
} from '../interfaces/motorbikes.interface';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3000/motorbikes?_page=1&_per_page=10';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private htpp = inject(HttpClient);

  getBannerMotorbikes(): Observable<Motorbike[]> {
    return this.htpp
      .get<MotorbikeResponse>(URL)
      .pipe(map((res) => res.data.splice(0, 4)));
  }
}
