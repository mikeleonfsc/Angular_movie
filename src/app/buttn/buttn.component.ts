import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttn',
  templateUrl: './buttn.component.html',
  styleUrls: ['./buttn.component.css']
})
export class ButtnComponent implements OnInit {
txt:  string;
 _buttonTxt: String;

  constructor() { 
    this.txt = 'original value . ';
    this.buttonTxt = 'type below to change';
  }

  ngOnInit() {
  }

  get buttonTxt(){
    return this._buttonTxt;
  }
  set buttonTxt(val){
    this._buttonTxt = val;
  }

changeText(){
  if (this.txt == 'text changed'){
    this.txt = "back t ooriginal";
  } else
this.txt = 'text changed';
}

}