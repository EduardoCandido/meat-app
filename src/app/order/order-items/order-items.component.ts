import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
})
export class OrderItemsComponent implements OnInit {

  @Input() cartItems: CartItem[] = [];
  @Output() increaseQuantity = new EventEmitter<CartItem>();
  @Output() decreaseQuantity = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();
  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQuantity(cartItem: CartItem):void{
    this.increaseQuantity.emit(cartItem);
  }

  emitDecreaseQuantity(cartItem: CartItem):void{
    this.decreaseQuantity.emit(cartItem);
  }

  emitRemove(cartItem: CartItem):void{
    this.remove.emit(cartItem);
  }
}
