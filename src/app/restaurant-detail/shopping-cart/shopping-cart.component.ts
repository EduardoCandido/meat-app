import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menuItem.model';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[]{
    return this.shoppingCartService.cartItems;
  }

  total():number{
    return this.shoppingCartService.total();
  }

  clear():void{
    this.shoppingCartService.clear();
  }

  removeItem(cartItem: CartItem){
    this.shoppingCartService.removeItem(cartItem);
  }

  addItem(menuItem: MenuItem){
    this.shoppingCartService.addItem(menuItem);
  }
}
