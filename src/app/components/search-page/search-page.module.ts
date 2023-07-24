import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidersModule } from './../shared/sliders/sliders.module';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { SharedModule } from './../shared/shared.module';
import { ButtonsModule } from './../shared/buttons/buttons.module'
import { CardsModule } from '../shared/cards/cards.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DateModule } from './../shared/date/date.module';
import { QuantityModule } from './../shared/quantity/quantity.module';
import { SearchBarModule } from '../shared/search-bar/search-bar.module';

@NgModule({
  declarations: [SearchPageComponent,],

  imports: [
    CardsModule,
    ButtonsModule,
    DateModule,
    QuantityModule,
    SlidersModule,
    SharedModule,
    CommonModule,
    Ng2SearchPipeModule,
    SearchBarModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
