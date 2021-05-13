import { Injectable } from "@angular/core";
import { MenuItem } from "../menu-item/menuItem.model";
import { CartItem } from "./cart-item.model";

@Injectable()
export class ShoppingCartService{
    cartItems: CartItem[] = [];

    removeItem(cartItem: CartItem):void{
        this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }

    addItem(menuItem: MenuItem):void{
        let existentCartItem = this.cartItems.find(cartItem => cartItem.menuItem.id == menuItem.id);
        if(existentCartItem){
            this.increaseQuantity(existentCartItem);
        } else {
            this.cartItems.push(new CartItem(menuItem));
        }
    }

    clear():void{
        this.cartItems  = [];
    }

    total():number{
        return this.cartItems.reduce((a, b)=> a + b.value(), 0);
    }

    increaseQuantity(cartItem:CartItem):void{
        cartItem.quantity = cartItem.quantity + 1;
    }

    decreaseQuantity(cartItem:CartItem):void{
        cartItem.quantity = cartItem.quantity - 1;
        if(cartItem.quantity == 0){
            this.removeItem(cartItem);
        }
    }
}