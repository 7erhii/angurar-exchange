import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyType} from "../exchange/exchange.service";

@Component({
  selector: 'app-exchange-select',
  templateUrl: './exchange-select.component.html',
})
export class ExchangeSelectComponent {


  @Input() label: string = '';
  @Input() currData: CurrencyType[] = [];
  @Input() selectedCurrency: CurrencyType | null = null;
  @Input() amountFrom: number | null = null;

  @Output() selectedCurrencyChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() amountChange: EventEmitter<number> = new EventEmitter<number>();

  handleChangeCurrency(): void {
    this.selectedCurrencyChange.emit(this.selectedCurrency);
  }

  handleConvertCurrency(): void {
    if (this.amountFrom) {
      this.amountChange.emit(this.amountFrom);
    }
  }

}
