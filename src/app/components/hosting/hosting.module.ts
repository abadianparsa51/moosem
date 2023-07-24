import { CardsModule } from './../shared/cards/cards.module';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { HostingRoutingModule } from './hosting-routing.module';

import { HostingComponent } from './hosting.component';
import { HostingHeroComponent } from './hosting-hero/hosting-hero.component';
import { HostingMechanismComponent } from './hosting-mechanism/hosting-mechanism.component';
import { HostingCommentsComponent } from './hosting-comments/hosting-comments.component';



@NgModule({
  declarations: [HostingComponent, HostingHeroComponent, HostingMechanismComponent, HostingCommentsComponent],
  imports: [CommonModule, SharedModule, ButtonsModule, HostingRoutingModule, CardsModule]
})
export class HostingModule { }
