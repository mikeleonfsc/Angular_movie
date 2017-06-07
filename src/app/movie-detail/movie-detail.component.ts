import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

 
import { MovieHTTPService } from '../../app/movie-http.service';
import { Movie } from '../../app/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers:[MovieHTTPService]
})
export class MovieDetailComponent implements OnInit {
 private _movie:Movie;
 constructor(private heroService: MovieHTTPService,
   private route: ActivatedRoute,
   private location: Location) { }

  ngOnInit() {
   // console.info('attemptin move for id: ');
    this.route.params
      .switchMap((params: Params) => this.heroService.getMovie(+params['id']))
      .subscribe(movie => this._movie = movie);
  }

  get movie(){
    return this._movie;
  }
  set movie(m:Movie){
    this._movie = m;
  }

}
