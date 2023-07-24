
import { RatingModule } from './../shared/rating/rating.module';
import { CommentsModule } from '../shared/comments/comments.module';
import { BreadCrumbModule } from './../shared/bread-crumb/bread-crumb.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsProfileRoutingModule } from './rooms-profile-routing.module';
import { RoomComponent } from './room/room.component';
import { SlidersModule } from '../shared/sliders/sliders.module';
import { CardsModule } from '../shared/cards/cards.module';
import { RoomInfoComponent } from './room-info/room-info.component';

import { ButtonsModule } from '../shared/buttons/buttons.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { SuggestionItemComponent } from './room-info/suggestion-item/suggestion-item.component';
import { MapModule } from '../shared/map/map.module';
import { DatePriceModule } from './../shared/date-price/date-price.module';
import { CardInfoComponent } from './room/card-info/card-info.component';
import { CommentSubmitModule } from '../shared/comment-submit/comment-submit.module';
import { SelectBox2Module } from '../shared/select-box2/select-box2.module';
import { InputsModule } from '../shared/inputs/inputs.module';
import { DateModule } from '../shared/date/date.module';


@NgModule({
  declarations: [RoomComponent, RoomInfoComponent, SuggestionItemComponent, CardInfoComponent],
  imports: [
    CommonModule,
    RoomsProfileRoutingModule,
    SlidersModule,
    DatePriceModule,
    CardsModule,
    BreadCrumbModule,
    NgxGalleryModule,
    ButtonsModule,
    RatingModule,
    CommentsModule,
    CommentSubmitModule,
    MapModule,
    SlidersModule,
    InputsModule,
    SelectBox2Module,
    DateModule
  ]
})
export class RoomsProfileModule { }


