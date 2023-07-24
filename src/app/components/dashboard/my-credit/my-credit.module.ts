import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaModule } from './../../shared/textarea/textarea.module';
import { UploadModule } from './../../shared/upload/upload.module';
import { ButtonsModule } from './../../shared/buttons/buttons.module';
import { InputsModule } from './../../shared/inputs/inputs.module';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { CardsModule } from '../../shared/cards/cards.module';
import { MyCreditRoutingModule } from './my-credit-routing.module';
import { MyCreditComponent } from './my-credit.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    MyCreditComponent,
    CreditCardComponent,
    TransactionComponent

  ],
  imports: [
    MyCreditRoutingModule,
    CommonModule,
    // RentalsModule,
    CardsModule,
    ButtonsModule,
    InputsModule,
    UploadModule,
    TextareaModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class MyCreditModule { }
