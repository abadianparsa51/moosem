import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioBtnComponent } from './radio-btn.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [RadioBtnComponent],
  exports: [RadioBtnComponent]
})
export class RadioBtnModule { }
