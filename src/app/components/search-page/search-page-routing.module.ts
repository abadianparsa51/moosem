import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page.component';


const searchPageRouts: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchPageRouts)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule { }
