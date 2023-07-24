import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from './range.component';

@NgModule({
  declarations: [RangeComponent],
  imports: [CommonModule, RouterModule],
  exports: [RangeComponent]
})
export class RangeModule { }
