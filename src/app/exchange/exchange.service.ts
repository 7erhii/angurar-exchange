import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type CurrencyType = {
  r030: number,
  cc: string,
  exchangedate: string,
  rate: number,
  txt: string,
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private API_URL: string = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) { }

  getData(): Observable<CurrencyType[]> {
    return this.http.get<CurrencyType[]>(this.API_URL);
  }
}
