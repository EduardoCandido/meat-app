import { Component, OnInit } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[]= [
    {label:"Cartão de crédito", value:"CC"},
    {label:"Cartão de débito", value:"CD"},
    {label:"Dinheiro", value:"D"},
    {label:"Vale refeição", value:"VR"},
  ]

  constructor(private orderService: OrderService) { }
  delivery: number = 5;

  ngOnInit() {
  }

  cartItems():CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQuantity(cartItem: CartItem):void{
    this.orderService.increaseQuantity(cartItem);
  }

  decreaseQuantity(cartItem: CartItem):void{
    this.orderService.decreaseQuantity(cartItem);
  }

  remove(cartItem: CartItem):void{
    this.orderService.remove(cartItem);
  }

  itemsValue():number{
    return this.orderService.itemsValue();
  }

  checkOrder(order:Order): void{
    order.orderItems = this.cartItems()
      .map(cartItem => new OrderItem(cartItem.quantity, cartItem.menuItem.id))
    this.orderService.checkOrder(order).subscribe(order =>{
      console.log(order);
      this.orderService.clear();
    });
  }
}
