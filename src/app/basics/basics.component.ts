import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  // template:`
  //   <div>Helooooooo</div>
  //   <p>Welcome Paragraph</p>
  // `,
  styleUrls: ['./basics.component.css']
  // styles:[`
  //   div{
  //     color:red;
  //   }
  // `]
})
export class BasicsComponent implements OnInit {

  public name="Baabte";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hellooo "+this.name;
  }
   
  test = 'hiiiiii';

}
