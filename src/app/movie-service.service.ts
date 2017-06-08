import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Movie } from './movie';

@Injectable()
export class MovieService {

  constructor() { }

getMovies(){
  let movieList = [{id:1, name:"Invincable", rating:2, watchAgain:false},
    {id:2, name: "Sound of Music", rating:2, watchAgain:false }
    ];
  return movieList;
}
}
