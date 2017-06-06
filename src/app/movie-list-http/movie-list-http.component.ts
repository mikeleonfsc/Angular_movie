
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
  errorMessage: string;
     
constructor(private movieHTTPListService: MovieHTTPService) {}
//  constructor(private http: Http) { }
  
  ngOnInit() {
    this.movieHTTPListService.getMovies().subscribe(data => this._movieHTTPList = data);
  //  this.http.get('http://localhost:8080/movies').map(response => response.json()).subscribe(result => this._movieHTTPList = result);
  }
  
  
  get movieHTTPList() {
    return this._movieHTTPList;
  }
  set movieHTTPList(l) {
    this._movieHTTPList = l;
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

}
