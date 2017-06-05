import { Component, OnInit } from '@angular/core';
import {Movie} from '../../app/movie';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList = [new Movie('Top Gun', 3, true),
    new Movie('Nurse 3D', 3, true) ];
  
  constructor() { 
    this.movieList.push(new Movie('The Firm', 3, true));
  }

  ngOnInit() {
  }

}
