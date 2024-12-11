import { inject, Injectable, InputSignal } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Motorbike,
  MotorbikeResponse,
} from '../interfaces/motorbikes.interface';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3000/motorbikes?_page=1&_per_page=10';
const URL_BY_ID = 'http://localhost:3000/motorbikes';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);

  getBannerMotorbikes(): Observable<Motorbike[]> {
    return this.http
      .get<MotorbikeResponse>(URL)
      .pipe(map(({ data }) => data.splice(0, 4)));
  }

  getMotorbikeById(id: InputSignal<number>): Observable<Motorbike> {
    return this.http.get<Motorbike>(`${URL_BY_ID}/${id}`);
  }
}
