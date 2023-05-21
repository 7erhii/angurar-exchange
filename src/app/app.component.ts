import { Component, Input } from '@angular/core';
import { currData } from './data/curr';


interface Currency {
  cc: string;
  rate: number;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curr1 = currData[24];
  curr2 = currData[31];

  currData: Currency[] = currData;
  selectedFromCurrency: Currency | undefined;
  selectedToCurrency: Currency | undefined;
  amountFrom: number | undefined;
  amountTo: number | undefined;

  convertCurrency(): void {
    if (this.selectedFromCurrency && this.selectedToCurrency && this.amountFrom) {
      const convertedAmount = (this.amountFrom * this.selectedFromCurrency.rate) / this.selectedToCurrency.rate;
      this.amountTo = +convertedAmount.toFixed(4);
    }
  }

  swapCurrencies(): void {
    const tempCurrency = this.selectedFromCurrency;
    this.selectedFromCurrency = this.selectedToCurrency;
    this.selectedToCurrency = tempCurrency;
    this.convertCurrency();
  }
}
