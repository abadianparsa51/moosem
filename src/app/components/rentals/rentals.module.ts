import { CardsModule } from './../shared/cards/cards.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalsRoutingModule } from './rentals-routing.module';
import { RentalsComponent } from './rentals/rentals.component';
import { ResidenceComponent } from './residence/residence.component';
import { TravelExperienceComponent } from './travel-experience/travel-experience.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { ButtonsModule } from '../shared/buttons/buttons.module';


@NgModule({
  declarations: [
    RentalsComponent,
    ResidenceComponent,
    TravelExperienceComponent,
    AttractionsComponent,

  ],
  imports: [CommonModule, RentalsRoutingModule, ButtonsModule, CardsModule]
})
export class RentalsModule { }
