import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Movie } from './movie';

// Import RxJs required methods
import 'rxjs/add/operator/map';
 

@Injectable()
export class MovieHTTPService {
  private moviesUrl = 'http://localhost:8080/movies'; 
  constructor(private http: Http) { }

  getMovies():Observable<Movie[]> {
    return this.http.get(this.moviesUrl).map(response => response.json() || {});
   
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data;
  } 
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);   
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }s
}