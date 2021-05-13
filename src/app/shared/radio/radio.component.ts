import { Component, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption[] = [];
  value:any;

  ngOnInit() {
  }

  setValue(value:any):void{
    this.value = value;
  }
}
