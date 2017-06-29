import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Movie } from './movie';

@Injectable()
export class MovieService {

  constructor() { }

getMovies(){
  let movieList = [{_id:1, name:"Invincable", rating:2, watchAgain:false,  updated_at:new Date(2014, 3, 19) },
  {_id:2, name: "Sound of Music", rating:2, watchAgain:false, updated_at:new Date(2014, 3, 19) }
    ];
  return movieList;
}
}
