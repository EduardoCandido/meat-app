import { MenuItem } from "../menu-item/menuItem.model";

export class CartItem{
    
    constructor(public menuItem:MenuItem, public quantity: number = 1){

    }

    value():number{
        return this.menuItem.price * this.quantity;
    }
}