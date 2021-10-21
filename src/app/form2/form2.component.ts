import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//creating model
  userForm =  new FormGroup({
    //name: new FormControl('Amal',Validators.required),      //Default value
    // name: new FormControl('',Validators.required),
    name: new FormControl(null,[Validators.required,Validators.minLength(4)]),
    address: new FormControl(),
    contact: new FormControl(null,Validators.pattern('^[1-9][0-9]{9}')),
    email: new FormControl(),
  })

  onSubmit(){
    console.log(this.userForm.value)
  }

}
