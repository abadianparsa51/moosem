import { SuggestComponent } from './suggest.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const suggestRoutes: Routes = [{ path: '', component: SuggestComponent }];

@NgModule({
  imports: [RouterModule.forChild(suggestRoutes)],
  exports: [RouterModule]
})
export class SuggestRoutingModule {}
