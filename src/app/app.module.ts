import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PaysComponent } from './paysListe/paysList.component';
import { PaysDetailComponent } from './pays-detail/pays-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PaysComponent,
    PaysDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
