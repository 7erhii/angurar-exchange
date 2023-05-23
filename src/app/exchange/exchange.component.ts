import {Component} from '@angular/core';
import {ExchangeService, CurrencyType} from './exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {
  CurrencyData: CurrencyType[] = [];

  selectedCurrencyFrom: CurrencyType | null = null;
  amountFrom: number | null = null;

  selectedCurrencyTo: CurrencyType | null = null;
  amountTo: number | null = null;

  constructor(private exchangeService: ExchangeService) {
  }

  convertCurrency(): void {
    if (this.selectedCurrencyFrom && this.selectedCurrencyTo && this.amountFrom) {
      const convertedAmount = (this.amountFrom * this.selectedCurrencyFrom.rate) / this.selectedCurrencyTo.rate;
      this.amountTo = +convertedAmount.toFixed(4);
    }
  }

  onChangeCurrencyFrom(currency: CurrencyType) {
    this.selectedCurrencyFrom = currency;
    this.convertCurrency();
    console.log(currency, 'onChangeCurrencyFrom');
  }

  onChangeAmountFrom(amount: number) {
    this.amountFrom = amount;
    this.convertCurrency();
  }

  onChangeCurrencyTo(currency: CurrencyType) {
    this.selectedCurrencyTo = currency;
    this.convertCurrency();
    console.log(currency, 'onChangeCurrencyTo');
  }

  onChangeAmountTo(amount: number) {
    this.amountTo = amount;
    if (this.selectedCurrencyTo && this.amountFrom && this.selectedCurrencyFrom) {
      const convertedAmount = (this.amountTo * this.selectedCurrencyTo.rate) / this.selectedCurrencyFrom.rate;
      this.amountFrom = +convertedAmount.toFixed(4);
    }
  }

  ngOnInit() {
    this.exchangeService.getData().subscribe(
      (response) => {
        this.CurrencyData = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
