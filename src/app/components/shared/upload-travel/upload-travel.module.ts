import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadTravelComponent } from './upload-travel.component';

@NgModule({
  declarations: [UploadTravelComponent],
  exports: [UploadTravelComponent],
  imports: [
    CommonModule
  ]
})
export class UploadTravelModule { }
