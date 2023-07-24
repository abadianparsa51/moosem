import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'

  },
  {
    path: 'app-landing',
    loadChildren: () =>
      import('./components/app-landing/app-landing.module').then(
        m => m.AppLandingModule
      )
  },
  {
    path: 'suggest',
    loadChildren: () =>
      import('./components/suggest/suggest.module').then(m => m.SuggestModule)
  },
  {
    path: 'hosting',
    loadChildren: () =>
      import('./components/hosting/hosting.module').then(m => m.HostingModule)
  },
  {
    path: 'hosting/submit',
    loadChildren: () =>
      import('./components/accommodation/accommodation.module').then(
        m => m.AccommodationModule
      )
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./components/authentication/authentication.module').then(
        m => m.AuthenticationModule
      )
  },
  {
    path: 'rentals',
    loadChildren: () =>
      import('./components/rentals/rentals.module').then(m => m.RentalsModule)
  },
  {
    path: 'cities',
    loadChildren: () =>
      import('./components/rentals-city/rentals-city.module').then(
        m => m.RentalsCityModule
      )
  },
  {
    path: 'attractions',
    loadChildren: () =>
      import('./components/attraction-list/attraction-list.module').then(
        m => m.AttractionListModule
      )
  },
  {
    path: 'room',
    loadChildren: () =>
      import('./components/rooms-profile/rooms-profile.module').then(
        m => m.RoomsProfileModule
      )
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        m => m.DashboardModule
      )
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./components/blog/blog.module').then(
        m => m.BlogModule
      )
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then(
        m => m.AboutModule
      )
  },
  {
    path: 'search-page',
    loadChildren: () =>
      import('./components/search-page/search-page.module').then(
        m => m.SearchPageModule
      )
  },
  {
    path: 'residence-search-page',
    loadChildren: () =>
      import('./components/residence-search-page/residence-search-page.module').then(
        m => m.ResidenceSearchPageModule
      )
  }, {
    path: 'exprince-search-page',
    loadChildren: () =>
      import('./components/exprince-search-page/exprince-search-page.module').then(
        m => m.ExprinceSearchPageModule
      )
  },
  {
    path: 'travel-exprience/submit',
    loadChildren: () =>
      import('./components/travel-exprience/travel-exprience.module').then(
        m => m.TravelExprienceModule
      )
  },
  {
    path: 'attraction',
    loadChildren: () =>
      import('./components/exprience/exprience.module').then(
        m => m.ExprienceModule
      )
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./components/sightseeing/sightseeing.module').then(
        m => m.SightseeingModule
      )
  },
  {
    path: 'owner',
    loadChildren: () =>
      import('./components/owner/onwer.module').then(
        m => m.OnwerModule
      )
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
