import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SightseeingComponent } from './sightseeing.component';
import { SightseeingRoutingModule } from './sightseeing-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { TextareaModule } from './../shared/textarea/textarea.module';
import { CardsModule } from '../shared/cards/cards.module';
import { SlidersModule } from '../shared/sliders/sliders.module';
import { DateModule } from './../shared/date/date.module';
import { QuantityModule } from './../shared/quantity/quantity.module';
import { CommentsModule } from './../shared/comments/comments.module';
import { MapModule } from './../shared/map/map.module';
import { DatePriceModule } from './../shared/date-price/date-price.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingModule } from './../shared/rating/rating.module';
import { CommentSubmitComponent } from './comment-submit/comment-submit.component';


@NgModule({
  declarations: [SightseeingComponent, CommentSubmitComponent],
  imports: [
    CommonModule,
    SharedModule,
    RatingModule,
    TextareaModule,
    DatePriceModule,
    ButtonsModule,
    CarouselModule,
    CardsModule,
    SlidersModule,
    SightseeingRoutingModule,
    DateModule,
    QuantityModule,
    CommentsModule,
    MapModule,
  ]
})
export class SightseeingModule { }
