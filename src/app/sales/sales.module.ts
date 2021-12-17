import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UpperPipe } from './pipes/upper.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NoCommonsComponent,
    NumbersComponent,
    BasicsComponent,
    OrderComponent,
    //PIPES
    FlyPipe,
    UpperPipe,
    OrderPipe
  ],
  exports: [
    NoCommonsComponent,
    NumbersComponent,
    BasicsComponent,
    OrderComponent
   ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
