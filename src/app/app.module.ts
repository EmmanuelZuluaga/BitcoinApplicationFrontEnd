import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricesBitcoinComponent } from './prices-bitcoin/prices-bitcoin.component';
import { DetailPriceBitcoinComponent } from './prices-bitcoin/detail-price-bitcoin/detail-price-bitcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    PricesBitcoinComponent,
    DetailPriceBitcoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
