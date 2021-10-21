import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  getEmployees(){
    return[
      {'id' : 1, 'name' : 'Askar', 'age' : 30},
      {'id' : 2, 'name' : 'Anil', 'age' : 25},
      {'id' : 3, 'name' : 'Sachin', 'age' : 32},
      {'id' : 4, 'name' : 'Elena', 'age' : 56}
    ]
  }
}
