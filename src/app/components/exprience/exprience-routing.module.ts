import { NgModule } from '@angular/core';
import { Routes, RouterModule } from
  '@angular/router';
import { ExprienceComponent } from
  './exprience.component'

const routes: Routes = [{
  path: '',
  component: ExprienceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExprienceRoutingModule { }
