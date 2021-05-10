import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  public restaurant: Restaurant;
  constructor(private restaurantService: RestaurantService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantbyId(this.activatedRoute.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }
}
