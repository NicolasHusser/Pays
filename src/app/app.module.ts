import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaysComponent } from './paysListe/paysList.component';
import { PaysDetailComponent } from './pays-detail/pays-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
import { CountrySearchComponent } from './country-search/country-search.component';
import { ContinentsComponent } from './continents/continents.component';
import { ContinentDetailComponent } from './continent-detail/continent-detail.component';
import { UniquePipe } from './filter.pipe';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PaysComponent,
    PaysDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CountrySearchComponent,
    ContinentsComponent,
    ContinentDetailComponent,
    UniquePipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
