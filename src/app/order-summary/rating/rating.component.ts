import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates:number[] = [1, 2, 3, 4, 5];
  rate:number = 1;
  previousRate:number;
  @Output() rated = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  setRate(r:number):void{
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r:number):void{
    if(!this.previousRate){
      this.previousRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate():void{
    if(this.previousRate){
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
