import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.css']
})
export class StoragesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  SetLocalstorage() {
    localStorage.setItem("heloo","world");
  }
  GetLocalstorage(){
    window.alert(localStorage.getItem('heloo'));
  }

}
