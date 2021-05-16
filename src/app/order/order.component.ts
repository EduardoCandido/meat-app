import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  paymentOptions: RadioOption[]= [
    {label:"Cartão de crédito", value:"CC"},
    {label:"Cartão de débito", value:"CD"},
    {label:"Dinheiro", value:"D"},
    {label:"Vale refeição", value:"VR"},
  ]

  constructor(private orderService: OrderService, private router:Router, private formBuilder: FormBuilder) { }
  delivery: number = 5;

  ngOnInit() {
    const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const numberPattern = '^[0-9]*$';
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    });
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
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    });
  }
}
