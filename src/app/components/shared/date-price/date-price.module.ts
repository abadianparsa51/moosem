import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePriceComponent } from './date-price.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule ,NgbModule],
  declarations: [DatePriceComponent],
  exports: [DatePriceComponent]
})
export class DatePriceModule { }
