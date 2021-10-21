import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name= "Baabte";
  public message= "Welcome to baabte";


  constructor() { }

  ngOnInit() {
  }
  public person = {
    "firstName" : "Rashid",
    "lastName":"luca"
    };
  public date = new Date();

}
