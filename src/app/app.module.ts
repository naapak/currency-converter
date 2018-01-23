import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {NglModule} from 'ng-lightning/ng-lightning';

import { AppComponent } from './app.component';
// import { BaseCurrency } from './widget/model/model.component';
// import {Currency} from './widget/model/currency.component';
// import {CurrencyViewComponent } from './widget/view/currency-view.component';
// import {FixerioService } from './services/fixerio.service';

import { AppRoutingModule } from './/app-routing.module';

import {CurrencyViewModule} from './widget/view/currency-view.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    CurrencyViewModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
