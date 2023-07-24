import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadCrumbComponent],
  exports: [BreadCrumbComponent],
  imports: [CommonModule, RouterModule]
})
export class BreadCrumbModule {}
