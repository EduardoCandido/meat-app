import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menuItem.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public menuItens: Observable<MenuItem>;

  constructor(private restaurantService: RestaurantService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menuItens = this.restaurantService.menuOfRestaurant(this.activatedRoute.parent.snapshot.params['id']);
  }

  addMenuItem(menuItem: MenuItem){
    console.log(menuItem);
  }

}
