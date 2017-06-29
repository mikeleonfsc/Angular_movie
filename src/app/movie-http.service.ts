import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Movie } from './movie';

// Import RxJs required methods
import 'rxjs/add/operator/map';
 

@Injectable()
export class MovieHTTPService {
  // private moviesUrl = 'http://localhost:8080/movies'; 
  //private moviesUrl = 'api/movies'; 
  //When trying to hit live service, need to remove the InMemoryWebApiModule.forRoot(InMemoryDataService) from the app.module.ts 
  //and ad dit in for memory API

  private moviesUrl = 'http://172.28.2.251:3000/wines'; 
  private headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
  
  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl).toPromise().then(response => response.json() as Movie[]).catch(this.handleError);
   
  }

  getMovie(id:number): Promise<Movie> {
    console.info('attemptin move for id: '+id);
    
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Movie)
      .catch(this.handleError);

  }
  create(id: number, name:String, rating:Number, watchAgain:boolean):Promise<Movie>{
    console.log('adding...');
     return this.http
     .post(this.moviesUrl, JSON.stringify({name: name, rating: rating, watchAgain: watchAgain,  updated_at:new Date(2014, 3, 19)}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Movie)
      .catch(this.handleError);
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