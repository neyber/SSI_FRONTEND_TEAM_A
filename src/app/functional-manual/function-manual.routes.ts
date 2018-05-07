import {Routes} from '@angular/router';
import {CreateManualComponent} from './create-manual/create-manual.component';
import {UpdateManualComponent} from './update-manual/update-manual.component';

export const MANUAL_ROUTES: Routes = [
  { path: 'newManual', component: CreateManualComponent},
  { path: 'editManual', component: UpdateManualComponent}
];
