import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExprinceSearchPageComponent } from './exprince-search-page.component'

const routes: Routes = [{ path: '', component: ExprinceSearchPageComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExprinceSearchPageRoutingModule { }
