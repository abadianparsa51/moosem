import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSubmitComponent } from './comment-submit.component';
import { TextareaModule } from '../textarea/textarea.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { RatingModule } from '../rating/rating.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CommentSubmitComponent],
  imports: [
    CommonModule,
    RouterModule,
    TextareaModule,
    ButtonsModule,
    RatingModule,
    AngularFontAwesomeModule
  ],
  exports: [CommentSubmitComponent]
})
export class CommentSubmitModule { }
