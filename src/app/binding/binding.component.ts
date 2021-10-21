import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Property Binding
  myid = false;
  // close property binding
  // class binding
  isSpecial=true;
  hasError=true;
  color = "";
  item:any;

  public messageClass={
    "txt-success": !this.hasError,
    "txt-danger":this.hasError,
    "txt-special":this.isSpecial
  }
  //close class binding
  //style binding
  highlightcolor="#ff1478";
  public titleStyle={
    color:"#ff7895",
    border:"solid 5px #ff7415"
  }
  //close style binding
  change(){
    console.log(this.item);
    this.color=this.item;
  }
}
