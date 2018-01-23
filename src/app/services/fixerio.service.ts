import { Injectable } from '@angular/core';
import {BaseCurrency} from '../widget/model/model.component';
import {Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/bundles/Rx';


@Injectable()
export class FixerioService {


  constructor(private http: Http) {  }

  getExchangeData(base): Promise<BaseCurrency> {
    const baseUrl  = `http://api.fixer.io/latest?base=${base}`;

    return this.http.get(baseUrl).toPromise()
    .then(response => {
      // console.log(response.json());
        return  response.json();
    })
    .catch(this.handleError);

}


  private handleError (error: any): Promise<any> {
    // console.log('an error occured', error);
    return Promise.reject(error.message || error);
   }

}
