import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'search/:query', component: SearchComponent, pathMatch: 'full' },
  { path: 'details/:id', component: WeatherComponent, pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}