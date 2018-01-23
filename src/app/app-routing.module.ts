import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisclaimerComponent} from './widget/disclaimer/disclaimer.component';
import { CurrencyViewComponent } from './widget/view/currency-view.component';
import { ContainerComponent } from './widget/container/container.component';



const routes: Routes = [
 {
    path: '',
    loadChildren: 'app/widget/view/currency-view.module#CurrencyViewModule',
    data: { preload: true }
  },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
