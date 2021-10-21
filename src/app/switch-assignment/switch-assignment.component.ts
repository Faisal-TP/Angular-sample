import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-assignment',
  templateUrl: './switch-assignment.component.html',
  styleUrls: ['./switch-assignment.component.css']
})
export class SwitchAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
color:any;
item:any;
MyColor(){
  this.item = this.color;
}
}
