import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RatingComponent } from './rating.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [CommonModule, AngularFontAwesomeModule],
  declarations: [RatingComponent],
  exports: [RatingComponent]
})
export class RatingModule {}
