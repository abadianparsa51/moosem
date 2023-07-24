import { NgModule } from '@angular/core';
import { Routes, RouterModule } from
  '@angular/router';
import { SightseeingComponent } from
  './sightseeing.component';

const routes: Routes = [{
  path: '',
  component: SightseeingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SightseeingRoutingModule { }
