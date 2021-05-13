import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

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

  constructor() { }

  ngOnInit() {
  }

}
