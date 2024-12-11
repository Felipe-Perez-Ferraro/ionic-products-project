import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Motorbike } from '../../interfaces/motorbikes.interface';

@Component({
  selector: 'app-motorbikes-modal',
  templateUrl: './motorbikes-modal.component.html',
  styleUrls: ['./motorbikes-modal.component.scss'],
  standalone: true,
})
export class MotorbikesModalComponent implements OnInit {
  productsService = inject(ProductsService);

  motorbikeId = input.required<number>();

  motorbike = signal<Motorbike | null>(null);

  ngOnInit() {
    this.productsService.getMotorbikeById(this.motorbikeId).subscribe((res) => {
      this.motorbike.set(res);
    });
  }
}
