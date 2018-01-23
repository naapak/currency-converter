import { RouterModule, Routes } from '@angular/router';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// import { UserRouteAccessService } from '../shared';
import { CurrencyViewComponent } from './currency-view.component';
import {DisclaimerComponent} from '../disclaimer/disclaimer.component';
import {ContainerComponent} from '../container/container.component';


  export const CURRENCY_ROUTES: Routes = [
    {path: '', component: ContainerComponent},
    { path: 'disclaimer', component: DisclaimerComponent}

];

@NgModule({
    imports: [ RouterModule.forChild(CURRENCY_ROUTES) ],
    exports: [ RouterModule ],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  export class CurrencyViewRoutes {}
