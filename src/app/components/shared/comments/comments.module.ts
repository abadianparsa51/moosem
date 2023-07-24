import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { RatingModule } from '../rating/rating.module';
import { ReplyComponent } from './reply/reply.component';


@NgModule({
  declarations: [CommentsComponent, ReplyComponent],
  imports: [
    CommonModule,
    RatingModule,
  ],

  exports: [CommentsComponent]
})
export class CommentsModule { }
