import { CardsModule } from './../shared/cards/cards.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionListRoutingModule } from './attraction-list-routing.module';
import { AttractionsComponent } from './attractions/attractions.component';

@NgModule({
  declarations: [AttractionsComponent],
  imports: [CommonModule, AttractionListRoutingModule, CardsModule]
})
export class AttractionListModule {}
