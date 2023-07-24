import { SlidersModule } from './../shared/sliders/sliders.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonsModule } from './../shared/buttons/buttons.module'
import { CardsModule } from '../shared/cards/cards.module';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { SupportFeaturesComponent } from './support-features/support-features.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSearchComponent,
    HeroComponent,
    SupportFeaturesComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    CardsModule,
    SharedModule,
    SlidersModule,
    HomeRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class HomeModule { }
