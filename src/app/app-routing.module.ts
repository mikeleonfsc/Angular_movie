import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MovieListHTTPComponent } from './movie-list-http/movie-list-http.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'movieListfromhttp', component: MovieListHTTPComponent },
    { path: 'detail/:id', component: MovieDetailComponent },
    { path: 'movieListFromStatic', component: MovieListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'create', component: AddMovieComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
