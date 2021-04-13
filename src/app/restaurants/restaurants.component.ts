import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {
  public restaurants: Restaurant[] = [];

  constructor(private restaurant$: RestaurantService) { }

  ngOnInit() {
    this.restaurant$.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
