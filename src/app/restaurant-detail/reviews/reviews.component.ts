import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { Review } from './review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  public reviews:Observable<Review>
  constructor(private restaurantService:RestaurantService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService
      .reviewsOfRestaurant(this.activatedRoute.parent.snapshot.params['id'])
  }

}
