import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { headerComponent} from './header.component';
import { FooterComponent} from './Footer.component';
import { ButtnComponent } from './buttn/buttn.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListHTTPComponent } from './movie-list-http/movie-list-http.component';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    FooterComponent,
    ButtnComponent,
    MovieListComponent,
    MovieListHTTPComponent,
    ],
  imports: [
    BrowserModule, FormsModule, HttpModule, JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
