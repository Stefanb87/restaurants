import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail-info',
  templateUrl: './restaurant-detail-info.component.html',
  styleUrls: ['./restaurant-detail-info.component.scss']
})
export class RestaurantDetailInfoComponent {
  @Input()
  restaurantDetailInfoData!: any[];

  @Output() closeEvent = new EventEmitter();

  onClose(): void {
    this.closeEvent.emit();
  }
}