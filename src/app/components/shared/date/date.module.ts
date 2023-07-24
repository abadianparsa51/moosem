import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateComponent } from './date.component';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, FormsModule],
  declarations: [DateComponent],
  exports: [DateComponent],
  bootstrap: [DateComponent]
})
export class DateModule { }
