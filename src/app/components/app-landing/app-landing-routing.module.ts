import { AppLandingComponent } from './app-landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appLandingRoutes: Routes = [{ path: '', component: AppLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(appLandingRoutes)],
  exports: [RouterModule]
})
export class AppLandingRoutingModule {}
