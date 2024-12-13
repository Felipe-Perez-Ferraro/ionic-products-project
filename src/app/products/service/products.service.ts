import { inject, Injectable, InputSignal, signal } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {
  Motorbike,
  MotorbikeResponse,
} from '../interfaces/motorbikes.interface';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3000/motorbikes';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);

  getAllMotorbikes(): Observable<Motorbike[]> {
    return this.http.get<Motorbike[]>(URL).pipe(map((data) => data));
  }

  getMotorbikes(): Observable<Motorbike[]> {
    return this.http.get<MotorbikeResponse>(`${URL}?_page=1&_per_page=10`).pipe(
      map(({ data }) => {
        return data;
      })
    );
  }

  getMotorbikeById(id: InputSignal<number>): Observable<Motorbike> {
    return this.http.get<Motorbike>(`${URL}/${id}`);
  }

  loadMoreMotorbikes(page: number): Observable<Motorbike[] | undefined> {
    return this.http
      .get<MotorbikeResponse>(`${URL}?_page=${page}&_per_page=10`)
      .pipe(
        map((res) => {
          if (page > res.pages) {
            return;
          }

          return res.data;
        })
      );
  }
}
