import { Component, OnInit } from '@angular/core';
import { DataserviceService} from '../service/dataservice.service';

@Component({
  selector: 'app-employeesecond',
  templateUrl: './employeesecond.component.html',
  styleUrls: ['./employeesecond.component.css']
})
export class EmployeesecondComponent implements OnInit {

  public employee=[];

  constructor(
    private dataservice : DataserviceService
  ) { }

  ngOnInit() {
    this.employee = this.dataservice.getEmployees();
  }

}
