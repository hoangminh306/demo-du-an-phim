import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CinemasModule } from './cinemas/cinemas.module';
import { HomeNewsComponent } from './home-news/home-news.component';
import { MoviesModule } from './movies/movies.module';
@NgModule({
  declarations: [HomePageComponent, CarouselComponent, HomeNewsComponent],
  imports: [
    CommonModule,HomePageRoutingModule, CinemasModule, MoviesModule
  ]
})
export class HomePageModule { }
