import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { ButtonActions, DropdownItemAction } from './components/buttonActions';

@Component({
  selector: 'general',
  encapsulation: ViewEncapsulation.None,
  directives: [ButtonActions],
  template: require('./general.html'),
})
export class General implements OnInit{

  dropdownItems: DropdownItemAction[] = [];
  
  ngOnInit() {
    // buttonActions
    this.dropdownItems.push(new DropdownItemAction('Delete User', this.deleteUser));
    this.dropdownItems.push(new DropdownItemAction('Edit User', this.editUser));
  }

  deleteUser(userId: string, userName: string){
    alert(`Deleting user ${userId} - ${userName}`);
  }

  editUser(userId: string, userName: string){
    alert(`Editing user ${userId} - ${userName}`);
  }
}
