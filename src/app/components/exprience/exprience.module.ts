import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExprienceRoutingModule } from './exprience-routing.module';
import { ExprienceComponent } from './exprience.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from './../shared/shared.module';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { TextareaModule } from './../shared/textarea/textarea.module';
import { CardsModule } from '../shared/cards/cards.module';
import { SlidersModule } from '../shared/sliders/sliders.module';
import { DateModule } from './../shared/date/date.module';
import { QuantityModule } from './../shared/quantity/quantity.module';
import { CommentsModule } from './../shared/comments/comments.module';
import { MapModule } from './../shared/map/map.module';


@NgModule({
  declarations: [ExprienceComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    TextareaModule,
    CommentsModule,
    MapModule,
    ButtonsModule,
    CardsModule,
    SlidersModule,
    DateModule,
    QuantityModule,
    ExprienceRoutingModule
  ]
})
export class ExprienceModule { }
