import { Component, OnInit } from '@angular/core';
import { DataserviceService} from '../service/dataservice.service';

@Component({
  selector: 'app-employeefirst',
  templateUrl: './employeefirst.component.html',
  styleUrls: ['./employeefirst.component.css']
})
export class EmployeefirstComponent implements OnInit {

  public employee = [];
  constructor(
    private dataservice : DataserviceService
  ) { }

  ngOnInit() {
    this.employee = this.dataservice.getEmployees();
  }

}
