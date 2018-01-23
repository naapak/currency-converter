import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NglModule} from 'ng-lightning/ng-lightning';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import {FixerioService} from '../../services/fixerio.service';

import {CurrencyViewRoutes} from './currency-view.routes';

import {CurrencyViewComponent} from './currency-view.component';
import {DisclaimerComponent} from '../disclaimer/disclaimer.component';
import { ContainerComponent } from '../container/container.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NglModule.forRoot(),
    CurrencyViewRoutes,
  ],
  declarations: [
    CurrencyViewComponent,
    DisclaimerComponent, ContainerComponent],
  providers: [FixerioService],
  bootstrap: []
})



export class CurrencyViewModule { }
