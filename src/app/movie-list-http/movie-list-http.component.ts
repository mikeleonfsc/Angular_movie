
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { MovieHTTPService } from '../../app/movie-http.service';
import { Movie } from '../../app/movie';



@Component({
  selector: 'app-movie-list-http',      
  templateUrl: './movie-list-http.component.html',
  styleUrls: ['./movie-list-http.component.css'],
  providers: [MovieHTTPService],
})
export class MovieListHTTPComponent implements OnInit {
  _movieHTTPList: Movie[];
  _selectedMovie:Movie
  errorMessage: string;
     
  constructor(private movieHTTPListService: MovieHTTPService, private router: Router) {}
//  constructor(private http: Http) { }
  
  ngOnInit() {
    this.movieHTTPListService.getMovies().then(data => this._movieHTTPList = data);
  //  this.http.get('http://localhost:8080/movies').map(response => response.json()).subscribe(result => this._movieHTTPList = result);
  }
  
  onSelect(movie: Movie): void {
    this._selectedMovie = movie;
  }

  get movieHTTPList() {
    return this._movieHTTPList;
  }
  set movieHTTPList(l) {
    this._movieHTTPList = l;
  }

  get selectedMovie() {
    return this._selectedMovie;
  }
  set selectedMovie(m) {
    this._selectedMovie = m;
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

}
