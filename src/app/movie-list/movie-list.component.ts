import { Component, OnInit } from '@angular/core';
import {Movie} from '../../app/movie';
import { MovieService } from '../../app/movie-service.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService],
})
export class MovieListComponent implements OnInit {

 _movieList:Movie[];
  // movieList = [new Movie('Top Gun', 3, true),
  //  new Movie('Nurse 3D', 3, true) ];
  
  constructor(private _movieService: MovieService) { 
   // this.movieList.push(new Movie('The Firm', 3, true));
  }

  ngOnInit() {
    this._movieList = this._movieService.getMovies();
  }

  get movieList(){
    return this._movieList;
  }
  set movieList(l){
    this._movieList = l;
  }

}
