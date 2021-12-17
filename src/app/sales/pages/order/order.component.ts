import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sale.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent{

  case    : boolean   = true;
  orderBy : string    = "";
  heroes  : Hero[]  = [
    {
      name  :'Superman',
      fly   :true,
      color :Color.blue
    },
    {
      name  :'Robin',
      fly   : false,
      color :Color.red
    },            
    {
      name  :'Thor',
      fly   :true,
      color :Color.yellow
    },
    {
      name  :'Batman',
      fly   : false,
      color :Color.black
    }
  ];
  
  changeCase(){
    // this.case==true?this.case=false:this.case=true
    this.case= !this.case;
  }

  changeOrder(order:string){
    this.orderBy=order;
  }

}
