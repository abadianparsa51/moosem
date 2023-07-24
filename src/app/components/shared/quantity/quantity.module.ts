import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityComponent } from './quantity.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuantityComponent],
  exports: [QuantityComponent]
})
export class QuantityModule {}
