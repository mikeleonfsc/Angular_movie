import { Component, OnInit } from '@angular/core';

import { MovieHTTPService } from '../../app/movie-http.service';
import { Movie } from '../../app/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
    providers: [MovieHTTPService],
})
export class AddMovieComponent implements OnInit {

  _movie:Movie;
  _id:number = 20;
  _rating:string;
  _watchAgain: boolean; 
 
  constructor(private movieService:MovieHTTPService) { }

  ngOnInit() {
  }

  add(name, rating, watchAgain): void {
    name = name.trim();
    if (!name) { return; }
    this.movieService.create(this._id, name+' '+ this._id, rating, this._watchAgain ) //for some reason cant get radio fgroup to get value
      .then(movie => {
        this._id+= 1;
        console.log('rating= '+ rating);
         console.log('watch again= '+ this._watchAgain);
        console.log('movie= '+ movie);
        this._movie = movie;
        
      });
  }
}
