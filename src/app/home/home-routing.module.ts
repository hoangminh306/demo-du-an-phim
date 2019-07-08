import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent,
    children: [
      {path: "home-page", loadChildren: "./home-page/home-page.module#HomePageModule"},
      {path: "booking", loadChildren:"./booking/booking.module#BookingModule"},
      {path: "news", loadChildren:"./news/news.module#NewsModule"},
      {path: "reviews", loadChildren:"./reviews/reviews.module#ReviewsModule"},
      {path: "detail", loadChildren:"./detail/detail.module#DetailModule"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
