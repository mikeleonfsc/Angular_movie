import { Component, OnInit, Input } from '@angular/core';

import { Movie } from './../movie';

@Component({
  selector: 'app-movie-child',
  templateUrl: './movie-child.component.html',
  styleUrls: ['./movie-child.component.css']
})
export class MovieChildComponent implements OnInit {
 @Input()
  movie:Movie;
  constructor() { }

  ngOnInit() {
  }

}
