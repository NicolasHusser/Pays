import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PaysComponent }      from './paysListe/paysList.component';
import { PaysDetailComponent }  from './pays-detail/pays-detail.component';
import { ContinentsComponent }      from './continents/continents.component';
import { ContinentDetailComponent }  from './continent-detail/continent-detail.component';
import { ContactComponent }  from './components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:name', component: PaysDetailComponent },
  { path: 'countries', component: PaysComponent },
  { path: 'continent', component: ContinentsComponent },
  { path: 'details/:region', component: ContinentDetailComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
