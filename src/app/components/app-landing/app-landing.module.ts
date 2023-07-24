import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './app-landing-routing.module';
import { SharedModule } from './../shared/shared.module';

import { AppLandingComponent } from './app-landing.component';
import { AppHeroComponent } from './app-hero/app-hero.component';
import { AppOptionsComponent } from './app-options/app-options.component';

@NgModule({
  declarations: [AppLandingComponent, AppHeroComponent, AppOptionsComponent],
  imports: [CommonModule, AppLandingRoutingModule, SharedModule]
})
export class AppLandingModule {}
