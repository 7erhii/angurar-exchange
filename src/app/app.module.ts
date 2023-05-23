import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeHeaderComponent } from './exchange-header/exchange-header.component';
import { ExchangeSelectComponent } from './exchange-select/exchange-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    ExchangeHeaderComponent,
    ExchangeSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
