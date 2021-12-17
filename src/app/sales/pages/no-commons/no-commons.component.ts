import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent implements OnInit {

  // i18nSelect
  name     : string ="Maria";
  genre  : string = "female";

  genreMap = {
    "male"   : "his",
    "female"  : "her"
  }

  // i18nPlural
  clients : string[] = ["Dany","Javier","Dylan"];

  clientsMap ={
      "=0"  : "there's any client waiting.",
      "=1"  : "there's 1 client waiting.",
      "other"  : `there're # clients waiting.`
  }
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  changeName(){
    
    this.genre == "male"? this.genre  = "female":this.genre  = "male";
    this.genre == "male"? this.name  = "Dany":this.name  = "Maria";
  }

  decreentPerson(){
    if(this.clients.length>0){
      this.clients.splice(this.clients.length-1,1)
      console.log(this.clients);
    }
  }

  //keyValue Pipe

  person={
    name    : "Dany",
    age     : 23,
    address :"Tegucigalpa"
  }

  //json pipe is missing

  //async pipe
  myObservable = interval(1000);

  valuePrommise = new Promise((resolve,rejection)=>{
    setTimeout(()=>{
      resolve("Promise data")
    },3500);
  });


}
