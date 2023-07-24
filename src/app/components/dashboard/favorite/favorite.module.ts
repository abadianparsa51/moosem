import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaModule } from './../../shared/textarea/textarea.module';
import { UploadModule } from './../../shared/upload/upload.module';
import { ButtonsModule } from './../../shared/buttons/buttons.module';
import { InputsModule } from './../../shared/inputs/inputs.module';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { CardsModule } from '../../shared/cards/cards.module';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite.component';
import { FavoCardComponent } from './favo-card/favo-card.component';

@NgModule({
  declarations: [
    FavoriteComponent,
    FavoCardComponent,
  ],
  imports: [
    FavoriteRoutingModule,
    CommonModule,
    // RentalsModule,
    CardsModule,
    ButtonsModule,
    InputsModule,
    UploadModule,
    TextareaModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class FavoriteModule { }
