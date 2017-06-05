import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttn',
  templateUrl: './buttn.component.html',
  styleUrls: ['./buttn.component.css']
})
export class ButtnComponent implements OnInit {
txt:  string;
  constructor() { 
    this.txt = 'original value . ';
  }

  ngOnInit() {
  }


changeText(){
  if (this.txt == 'text changed'){
    this.txt = "back t ooriginal";
  } else
this.txt = 'text changed';
}

}