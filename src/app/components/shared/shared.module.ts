import { ButtonsModule } from './buttons/buttons.module';
import { TitleDividerComponent } from './title-divider/title-divider.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JoinContainerComponent } from './join-container/join-container.component';
import { QAndAComponent } from './q-and-a/q-and-a.component';
import { QaContentComponent } from './q-and-a/qa-content/qa-content.component';
import { QaTitleComponent } from './q-and-a/qa-title/qa-title.component';
import { FooterAboutComponent } from './footer-about/footer-about.component';
import { HighlightPipe } from 'src/app/pipes/highlight.pipe';
import { TabelComponent } from './tabel/tabel.component';
import { DateModule } from './date/date.module';
import { DatePriceModule } from './date-price/date-price.module';
import { RadioBtnModule } from './radio-btn/radio-btn.module';
import { RangeModule } from './range/range.module';
import { UploadTravelModule } from './upload-travel/upload-travel.module';
import { ToolTipModule } from './tool-tip/tool-tip.module';
import { CommentSubmitModule } from './comment-submit/comment-submit.module';
import { SelectBox3Component } from './select-box3/select-box3.component';

@NgModule({
  imports: [CommonModule,
    RouterModule,
    ButtonsModule,
    ToolTipModule,
    UploadTravelModule,
    DateModule,
    CommentSubmitModule,
    DatePriceModule,
    RadioBtnModule,
    RangeModule
  ],

  declarations: [
    HighlightPipe,
    TitleDividerComponent,
    JoinContainerComponent,
    QAndAComponent,
    QaContentComponent,
    QaTitleComponent,
    FooterAboutComponent,
    TabelComponent,
    SelectBox3Component,
    // CommentSubmitComponent,
    // ToolTipComponent,

  ],
  exports: [
    HighlightPipe,
    TitleDividerComponent,
    JoinContainerComponent,
    QAndAComponent,
    QaContentComponent,
    QaTitleComponent,
    FooterAboutComponent
  ]
})
export class SharedModule { }
