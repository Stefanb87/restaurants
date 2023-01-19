import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
    private restaurantIds = ['GXvPAor1ifNfpF0U5PTG0w', 'ohGSnJtMIC5nPfYRi_HTAg'];
    private baseUrl = 'https://storage.googleapis.com/coding-session-rest-api/';
    restaurantsDataSubject = new BehaviorSubject<any[]>([]);

    constructor(private http: HttpClient) {}

    getRestaurantsInfo() {
        const request = this.restaurantIds.map((restaurantId: string) => this.http.get(this.baseUrl + restaurantId));
        forkJoin(request).pipe(
            map((restaurantsData: any[]) => {
                return restaurantsData.map((restaurantData: any) => {
                    return {
                        ...restaurantData,
                        opening_hours: this.constructRestaurantsDetailInfo(restaurantData)
                    }
                })
            })).subscribe((restaurantsData: any[]) => {
            this.restaurantsDataSubject.next(restaurantsData);
        });
    }

    constructRestaurantsDetailInfo(restaurantData: any) {
        const openingHoursByDays = structuredClone(restaurantData.opening_hours.days);
        const days = Object.keys(openingHoursByDays);
        const allDaysInOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const openingHoursByDaysOrdered: any[] = [];

        allDaysInOrder.forEach((day: string) => {
            if (days.includes(day)) {
                openingHoursByDays[day].push(day);
                openingHoursByDaysOrdered.push(openingHoursByDays[day]);
            } else {
                openingHoursByDaysOrdered.push(['Closed', day]);
            }
        });

        return openingHoursByDaysOrdered;
    }
}