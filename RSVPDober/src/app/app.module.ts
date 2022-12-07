import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AirtableAuthInterceptor } from './airtable-auth.interceptor';

  export const BASE_URL = new InjectionToken<string> ('BaseUrl');
  export const AIRTABLE_PAT=new InjectionToken <string>('AirtablePat');
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GuestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:BASE_URL,useValue: 'https://api.airtable.com/v0/appLUHuTmM3n5Jyoa'},
    {provide: AIRTABLE_PAT,useValue:'patTs8K5Hn1WuKN2O.1682a783a6531939d6392f475e889e781d48f483b5e0d0d1f3ead1f42d164325'},
    {provide: HTTP_INTERCEPTORS, useClass: AirtableAuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
