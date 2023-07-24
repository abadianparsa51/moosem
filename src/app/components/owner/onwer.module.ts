import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnwerRoutingModule } from './onwer-routing.module';
import { OwnerComponent } from './owner.component';
import { SharedModule } from './../shared/shared.module';
import { DatePriceModule } from '../shared/date-price/date-price.module';
import { ButtonsModule } from '../shared/buttons/buttons.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardsModule } from '../shared/cards/cards.module';
import { SlidersModule } from '../shared/sliders/sliders.module';
import { DateModule } from '../shared/date/date.module';
import { QuantityModule } from '../shared/quantity/quantity.module';
import { CommentsModule } from '../shared/comments/comments.module';
import { MapModule } from '../shared/map/map.module';


@NgModule({
  declarations: [OwnerComponent],
  imports: [
    CommonModule,
    OnwerRoutingModule,
    SharedModule,
    DatePriceModule,
    ButtonsModule,
    CarouselModule,
    CardsModule,
    SlidersModule,
    DateModule,
    QuantityModule,
    CommentsModule,
    MapModule,
  ],
  exports: [OwnerComponent]
})

export class OnwerModule { }
