import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidenceSearchPageRoutingModule } from './residence-search-page-routing.module';
import { ResidenceSearchPageComponent } from './residence-search-page.component';

import { SharedModule } from './../shared/shared.module';
import { ButtonsModule } from './../shared/buttons/buttons.module'
import { CardsModule } from '../shared/cards/cards.module';
import { SlidersModule } from '../shared/sliders/sliders.module';
import { DateModule } from './../shared/date/date.module';
import { MapModule } from './../shared/map/map.module';
import { FilterComponent } from './../rentals-city/rentals-city/filter/filter.component';
import { QuantityModule } from './../shared/quantity/quantity.module';
import { SelectBoxComponent } from './select-box/select-box.component';
import { InputsModule } from './../shared/inputs/inputs.module';
import { RadioBtnModule } from './../shared/radio-btn/radio-btn.module';
import { RangeModule } from '../shared/range/range.module';
import { Ng5SliderModule } from 'ng5-slider';
import { SearchBarModule } from '../shared/search-bar/search-bar.module';


@NgModule({
  declarations: [ResidenceSearchPageComponent, FilterComponent, SelectBoxComponent],
  imports: [
    MapModule,
    RadioBtnModule,
    DateModule,
    InputsModule,
    QuantityModule,
    CardsModule,
    ButtonsModule,
    SlidersModule,
    SharedModule,
    CommonModule,
    RangeModule,
    ResidenceSearchPageRoutingModule,
    Ng5SliderModule,
    SearchBarModule
  ]
})
export class ResidenceSearchPageModule { }
