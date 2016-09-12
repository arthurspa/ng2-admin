import { Routes, RouterModule }  from '@angular/router';

import { Shared } from './shared.component';
import { General } from './components/general/general.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Shared,
    children: [
      { path: 'general', component: General }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
