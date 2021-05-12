import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './menuItem.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem:MenuItem;
  @Output() add = new EventEmitter<MenuItem>();
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent():void{
    this.add.emit(this.menuItem)
  }

}
