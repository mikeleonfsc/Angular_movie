import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSelectModule, MdRadioModule} from '@angular/material';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { headerComponent} from './header.component';
import { FooterComponent} from './Footer.component';
import { ButtnComponent } from './buttn/buttn.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListHTTPComponent } from './movie-list-http/movie-list-http.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieChildComponent } from './movie-child/movie-child.component';
import { AddMovieComponent } from './add-movie/add-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    FooterComponent,
    ButtnComponent,
    MovieListComponent,
    MovieListHTTPComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieChildComponent,
    AddMovieComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdRadioModule,
    FormsModule, 
    HttpModule, 
    JsonpModule,
    MdSelectModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [MovieListHTTPComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
