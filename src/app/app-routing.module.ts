import { EventSearchComponent } from './event/event-search/event-search.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/eventAll/event.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'event-list',
    component: EventComponent
  },
  {
    path: 'event-search',
    component: EventSearchComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
