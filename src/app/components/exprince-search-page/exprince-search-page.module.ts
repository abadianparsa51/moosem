import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExprinceSearchPageComponent } from './exprince-search-page.component';
import { ExprinceSearchPageRoutingModule } from './exprince-search-page-routing.module';

import { SharedModule } from './../shared/shared.module';
import { ButtonsModule } from './../shared/buttons/buttons.module'
import { CardsModule } from '../shared/cards/cards.module';
import { SlidersModule } from '../shared/sliders/sliders.module';
import { DateModule } from './../shared/date/date.module';
import { QuantityModule } from './../shared/quantity/quantity.module';

@NgModule({
  declarations: [ExprinceSearchPageComponent],
  imports: [
    CardsModule,
    DateModule,
    QuantityModule,
    ButtonsModule,
    SlidersModule,
    SharedModule,
    CommonModule,
    ExprinceSearchPageRoutingModule
  ]
})
export class ExprinceSearchPageModule { }
