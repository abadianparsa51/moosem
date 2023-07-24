import { MapModule } from './../shared/map/map.module';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { CardsModule } from './../shared/cards/cards.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './rentals-city/filter/filter.component';

import { RentalsCityRoutingModule } from './rentals-city-routing.module';
import { RentalsCityComponent } from './rentals-city/rentals-city.component';


@NgModule({
  declarations: [RentalsCityComponent, FilterComponent],
  imports: [
    CommonModule,
    RentalsCityRoutingModule,
    CardsModule,
    ButtonsModule,
    MapModule
  ]
})

export class RentalsCityModule { }
