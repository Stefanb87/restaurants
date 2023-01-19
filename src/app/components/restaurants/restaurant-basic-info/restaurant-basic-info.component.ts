import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-basic-info',
  templateUrl: './restaurant-basic-info.component.html',
  styleUrls: ['./restaurant-basic-info.component.scss']
})
export class RestaurantBasicInfoComponent {
  @Input()
  restaurantName!: string;

  @Input()
  restaurantAddress!: string;

  @Output() moreInfoEvent = new EventEmitter();

  onMoreInfoClick(): void {
    this.moreInfoEvent.emit();
  }

}