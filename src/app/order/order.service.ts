import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";

@Injectable()
export class OrderService{    
    constructor(private shoppingCartService: ShoppingCartService, private http: Http){}

    cartItems():CartItem[]{
        return this.shoppingCartService.cartItems;
    }

    increaseQuantity(cartItem:CartItem){
        this.shoppingCartService.increaseQuantity(cartItem);
    }

    decreaseQuantity(cartItem:CartItem){
        this.shoppingCartService.decreaseQuantity(cartItem);
    }

    remove(cartItem:CartItem){
        this.shoppingCartService.removeItem(cartItem);
    }

    itemsValue():number{
        return this.shoppingCartService.total();
    }

    checkOrder(order:Order):Observable<Order>{
        const url =  `${MEAT_API}/orders`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, JSON.stringify(order), new RequestOptions({headers}))
            .map(response => response.json());
    }

    clear():void{
        this.shoppingCartService.clear();
    }
}