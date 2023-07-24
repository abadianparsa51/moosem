import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenceSearchPageComponent } from './residence-search-page.component';

const routes: Routes = [{
  path: '',
  component: ResidenceSearchPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidenceSearchPageRoutingModule { }
