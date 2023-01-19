import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    restaurantsData$!: Observable<any[]>;
    restaurantIndex!: number | null;

    constructor(private restaurantService: RestaurantService) {}

    ngOnInit(): void {
      this.restaurantsData$ = this.restaurantService.restaurantsDataSubject;
      this.restaurantService.getRestaurantsInfo();
    }

    showDetailInfo(index: number): void {
      index === this.restaurantIndex ? this.restaurantIndex = null : this.restaurantIndex = index;
    }
}