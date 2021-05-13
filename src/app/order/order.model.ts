class Order{
    address: string;
    number: number;
    optionalAddress:string;
    paymentOption: string;
    orderItems: OrderItem[] = []
}

class OrderItem{
    constructor(public quantity:number, public menuId: string){}
}

export {Order, OrderItem};