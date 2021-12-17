import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name  : string  = "daNy JaviEr coRea lazO";
  value : number  = 7500;

  showName(){
    console.log(this.name);
    console.log(this.value);
       
  }
}
