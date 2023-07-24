import { RatingModule } from './../rating/rating.module';
import { ButtonsModule } from "./../buttons/buttons.module";
import { ToolTipModule } from './../tool-tip/tool-tip.module';
import { InputsModule } from './../inputs/inputs.module';
import { SelectBoxModule } from "./../select-box/select-box.module";
import { SelectBox2Module } from './../select-box2/select-box2.module';
import { RouterModule } from "@angular/router";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainCardComponent } from "./main-card/main-card.component";
import { BgCardComponent } from "./bg-card/bg-card.component";
import { SecondaryCardComponent } from "./secondary-card/secondary-card.component";
import { NewsCardComponent } from "./news-card/news-card.component";
import { CommentCardComponent } from "./comment-card/comment-card.component";
import { ReserveCardComponent } from "./reserve-card/reserve-card.component";
import { FormsModule } from "@angular/forms";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { SharedModule } from './../../shared/shared.module';
import { HostManagmentCardComponent } from './host-managment-card/host-managment-card.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { DatePriceModule } from './../date-price/date-price.module';
import { SecondaryCard2Component } from './secondary-card2/secondary-card2.component';
import { SingleComponent } from './single/single.component';
import { AtterCardComponent } from './atter-card/atter-card.component';
import { QuantityModule } from './../quantity/quantity.module';
import { SearchMainCardComponent } from './search-main-card/search-main-card.component';


@NgModule({
  imports: [
    CommonModule,
    SelectBox2Module,
    ToolTipModule,
    InputsModule,
    SharedModule,
    QuantityModule,
    CarouselModule,
    RouterModule,
    DatePriceModule, QuantityModule,
    SelectBoxModule,
    ButtonsModule,
    FormsModule,
    RatingModule,
    NgxDaterangepickerMd.forRoot()
  ],
  declarations: [

    MainCardComponent,
    BgCardComponent,
    SecondaryCardComponent,
    NewsCardComponent,
    CommentCardComponent,
    ReserveCardComponent,
    HostManagmentCardComponent,
    FavoriteCardComponent,
    ImageCardComponent,
    SecondaryCard2Component,
    SingleComponent,
    AtterCardComponent,
    SearchMainCardComponent
  ],
  exports: [

    MainCardComponent,
    BgCardComponent,
    SingleComponent,
    SecondaryCardComponent,
    SecondaryCard2Component,
    NewsCardComponent,
    AtterCardComponent,
    CommentCardComponent,
    ReserveCardComponent,
    HostManagmentCardComponent,
    ImageCardComponent,
    FavoriteCardComponent,
    SearchMainCardComponent
  ]
})
export class CardsModule { }
