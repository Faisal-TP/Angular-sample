import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-component',
  templateUrl: './for-component.component.html',
  styleUrls: ['./for-component.component.css']
})
export class ForComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public colors=['Red','Green','yellow','Blue','Black','White'];

  students = [
    {"name":"Manu","age":"42","contact":"1234567899"},
    {"name":"Lisa","age":"25","contact":"8596745263"},
    {"name":"Anil","age":"48","contact":"4562323252"},
    {"name":"Kiran","age":"52","contact":"7485968574"}
    
];
}
