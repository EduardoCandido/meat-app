import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurants.service";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";

@NgModule({
    declarations: [InputComponent, RadioComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent, FormsModule, ReactiveFormsModule, CommonModule]
})
export class SharedModule{
    static forRoot():ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantService, OrderService]        }
    }
}