import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-assignment',
  templateUrl: './for-assignment.component.html',
  styleUrls: ['./for-assignment.component.css']
})
export class ForAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  student:any;
  stud = [];
  AddStudent(){
    this.stud.push(this.student);
  }
  RemoveStudent(){
    this.stud.pop();
  }
  RemoveEach(i){
    this.stud.splice(i,1);
  }

  name:any;
  age:any;
  contact:any;

  students = [];

  AddDetailes(){
    // console.log(this.name);
     console.log(this.students);
    // this.students['name'].push([this.name]);
    // array.newpair = 'newvalue';
    //myArray[i].push(0);
    //console.log(typeof(this.students));
    this.students.push({"name":this.name,"age":this.age,"contact":this.contact});

  }
}
