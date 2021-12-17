import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items : MenuItem[]=[];//=[1,2,3,4,5,6,7,8,9];
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label : 'Angular Pipes',
          icon  : 'pi pi-desktop',
          items: [ 
            {
                label       : 'Texts & Dates', 
                icon        : 'pi pi-align-left',
                routerLink  : '/'
            },
            {
                label       : 'Numbers', 
                icon        : 'pi pi-dollar',
                routerLink  : 'numbers'
            },
            {
                label       : 'No Commons', 
                icon        : 'pi pi-globe',
                routerLink  : 'no-commons'
            }
          ],
      },
      {
          label       : 'Customized Pipes',
          icon        : 'pi pi-cog',
          routerLink  : 'order'
      }
  ];
  }

}
