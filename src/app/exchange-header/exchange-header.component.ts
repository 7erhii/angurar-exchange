import {Component, Input} from '@angular/core';
import {CurrencyType, ExchangeService} from "../exchange/exchange.service";

@Component({
  selector: 'app-exchange-header',
  templateUrl: './exchange-header.component.html',
})
export class ExchangeHeaderComponent {
  @Input() currentFrom: CurrencyType | null = null;
  @Input() currentTo: CurrencyType | null = null;


  topCurr1: string = '';
  rate1: number = 0;
  topCurr2: string = '';
  rate2: number = 0;

  constructor(private exchangeService: ExchangeService) {
    this.exchangeService.getData().subscribe((data: CurrencyType[]) => {
      const currency1 = data.find(obj => obj.cc === 'EUR');
      const currency2 = data.find(obj => obj.cc === 'USD');

      if (currency1) {
        this.topCurr1 = currency1.cc;
        this.rate1 = currency1.rate;
      }

      if (currency2) {
        this.topCurr2 = currency2.cc;
        this.rate2 = currency2.rate;
      }
    });
  }
}
