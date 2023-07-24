import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from '../cards/cards.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { DefaultSliderComponent } from './default-slider/default-slider.component';
import { BgSliderComponent } from './bg-slider/bg-slider.component';
import { SecondarySliderComponent } from './secondary-slider/secondary-slider.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { RoomSliderComponent } from './room-slider/room-slider.component';
import { RelatedArticleSliderComponent } from './related-article-slider/related-article-slider.component';
import { RelatedItemsComponent } from './related-items/related-items.component';
import { SecondarySlider2Component } from './secondary-slider2/secondary-slider2.component';
import { SingleSilderComponent } from './single-silder/single-silder.component';
import { ResidenceSliderComponent } from './residence-slider/residence-slider.component';
import { AttractionSliderComponent } from './attraction-slider/attraction-slider.component';


@NgModule({
  imports: [CommonModule, CarouselModule, CardsModule],
  declarations: [
    DefaultSliderComponent,
    BgSliderComponent,
    SecondarySliderComponent,
    NewsSliderComponent,
    RoomSliderComponent,
    RelatedArticleSliderComponent,
    RelatedItemsComponent,
    SecondarySlider2Component,
    SingleSilderComponent,
    ResidenceSliderComponent,
    AttractionSliderComponent
  ],
  exports: [
    DefaultSliderComponent,
    BgSliderComponent,
    SecondarySliderComponent,
    SecondarySlider2Component,
    SingleSilderComponent,
    NewsSliderComponent,
    RoomSliderComponent,
    RelatedArticleSliderComponent,
    RelatedItemsComponent,
    ResidenceSliderComponent,
    AttractionSliderComponent
  ]
})
export class SlidersModule { }
