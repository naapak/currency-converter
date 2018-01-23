import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {FixerioService} from '../../services/fixerio.service';
import {BaseCurrency} from '../model/model.component';
import {Currency} from '../model/currency.component';

@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.scss']
})
export class CurrencyViewComponent implements OnInit {

  baseCurrency: BaseCurrency;
  currencies = new Currency().currencies;
  currency1 = this.currencies[0];
  currency2 = this.currencies[1];
  currency1value: any = 1;
  offLine: string;


  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  @Input() target_output = 1.25;


  constructor(private fixerService: FixerioService) { }

  ngOnInit() {
    this.flexerioData(this.currency1);
            }


      flexerioData(base): void {

        const exchangeData: Promise<BaseCurrency> = this.fixerService.getExchangeData(base);
        exchangeData.then(
          (response) => {
          this.baseCurrency = response;
          this.targetValue(this.currency2);
          this.offLine = '';
        }).catch((error) => {
          console.log('error from view component', error);
          if (error.status === 0) {
            this.offLine = 'The internet connection appears to be offline.';
          } else if (error.status === 500 || error.status === 502) {
            this.offLine = 'Sorry the server is under maintenance, please come back later.';
          }
        });


      }

      targetValue (currency: string, currencyValue?: number): number {
        if (this.currency1 === this.currency2) {
          return this.target_output = Number(this.currency1value);
        } else {
         return this.target_output = Number((this.baseCurrency.rates[currency] * this.currency1value).toFixed(2));
        }

      }

      inputChange(e): any {

        const inputValue: any = e.target.value;
        console.log(typeof inputValue);
        if (!isNaN(inputValue) ) {
        const value: number = this.targetValue(this.currency2, inputValue);

          if (this.currency1value === inputValue) {
          this.currency1value = inputValue;
          this.target_output = value;
          }
        } else if (inputValue === '') { this.currency1value = ''; }
    }

}

// if input value is blank then output value should be blank....

