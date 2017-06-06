import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MovieListHTTPComponent } from './movie-list-http/movie-list-http.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'movieListfromhttp', component: MovieListHTTPComponent },
   // { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'movieListFromStatic', component: MovieListComponent },
    { path: 'home', component: HomeComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
