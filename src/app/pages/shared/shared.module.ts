import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './shared.routing';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Shared } from './shared.component';
import { General } from './components/general';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    DropdownModule,
    routing
  ],
  declarations: [
    General,
    Shared
  ]
})
export default class SahredModule { }
