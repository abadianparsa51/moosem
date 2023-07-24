import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputsComponent],
  exports: [InputsComponent],
  imports: [CommonModule, FormsModule]
})
export class InputsModule {}
