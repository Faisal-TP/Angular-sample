import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-assignment',
  templateUrl: './if-assignment.component.html',
  styleUrls: ['./if-assignment.component.css']
})
export class IfAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  home= true;
  about= false;
  gallery = false;
  contact = false;
Home(){
  this.home=true;
  this.about=false;
  this.gallery=false;
  this.contact=false;
}
About(){
  this.home=false;
  this.about=true;
  this.gallery=false;
  this.contact=false;
}
Gallery(){
  this.gallery=true;
  this.home=false;
  this.about=false;
  this.contact=false;
}
Contact(){
  this.gallery=false;
  this.home=false;
  this.about=false;
  this.contact=true;
}
}
