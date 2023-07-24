import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCreditComponent } from './my-credit.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  {
    path: '',
    component: MyCreditComponent,
    children: [
      { path: '', component: TransactionComponent },
      { path: 'increaseCredit', component: CreditCardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCreditRoutingModule { }
