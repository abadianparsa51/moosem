import { SuggestComponent } from './suggest.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestRoutingModule } from './suggest-routing.module';
import { SuggestFeaturesComponent } from './suggest-features/suggest-features.component';
import { SuggestHeroComponent } from './suggest-hero/suggest-hero.component';
import { SuggestInvitationComponent } from './suggest-invitation/suggest-invitation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SuggestComponent,
    SuggestFeaturesComponent,
    SuggestHeroComponent,
    SuggestInvitationComponent
  ],
  imports: [
    CommonModule,
    SuggestRoutingModule,
    SharedModule
  ]
})
export class SuggestModule { }
