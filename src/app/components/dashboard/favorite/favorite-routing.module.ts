import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite.component';
import { FavoCardComponent } from './favo-card/favo-card.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteComponent,
    children: [
      { path: '', component: FavoCardComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }
