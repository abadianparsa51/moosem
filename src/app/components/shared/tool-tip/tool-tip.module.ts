import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolTipComponent } from './tool-tip.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToolTipComponent],
  imports: [
    CommonModule,
    RouterModule],
  exports: [ToolTipComponent]
})
export class ToolTipModule { }
