import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  firstName : string = "DaNy";
  fullName  : string = `${this.firstName} javier cOrEA LAZO`
  
  date  :Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
