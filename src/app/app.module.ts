import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';


//change locale app

import localeEs  from "@angular/common/locales/es-HN";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    PrimeNgModule,
    SharedModule,
    SalesModule,
    BrowserAnimationsModule 
  ],
  providers: [
    {provide: LOCALE_ID,useValue:'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
