import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { DropdownItemAction } from './dropdownItemAction.class';

@Component({
  selector: 'button-actions',
  styles: [require('./buttonActions.scss')],
  template: require('./buttonActions.html'),
})
export class ButtonActions implements OnInit {

  @Input() items: DropdownItemAction[];
  @Input() callbackParameters: any[];
  @Input() buttonText: string = 'Actions';
  @Input() buttonIconClass: string = 'ion-gear-a';

  ngOnInit(){
  }

  clickedDropdownItem(clickedItem: DropdownItemAction): void {    
    clickedItem.callback(...this.callbackParameters);
  }
}
