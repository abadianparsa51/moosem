import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelComponent} from './tabel.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TabelComponent],
  exports: [TabelComponent]
})
export class ButtonsModule {}
