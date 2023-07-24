import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMessagesRoutingModule } from './my-messages-routing.module';
// import { CardsModule } from './../../shared/cards/cards.module';
import { ButtonsModule } from '../../shared/buttons/buttons.module';
import { MyMessagesComponent } from './my-messages.component'

@NgModule({
  declarations: [MyMessagesComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    MyMessagesRoutingModule
  ]
})
export class MyMessagesModule { }
