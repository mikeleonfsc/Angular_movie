import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';

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


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    FooterComponent,
    ButtnComponent,
    MovieListComponent,
    MovieListHTTPComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule, 
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [MovieListHTTPComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
