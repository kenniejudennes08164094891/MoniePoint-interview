import { Component } from '@angular/core';

@Component({
  selector: 'app-fifth-item',
  templateUrl: './fifth-item.component.html',
  styleUrls: ['./fifth-item.component.scss']
})
export class FifthItemComponent {

  
  user: string = "/assets/images/folder.png";
  user2: string = "/assets/images/profile1.png";
  button: string = "/assets/images/graphicz.gif"; 
  graph: string =  "/assets/images/graph1.png";
  squareImage: string = "/assets/images/lessthan.png"
  showFirstGraph:boolean = true;
  showSecondGraph:boolean = false;
  showItems: boolean = true;
  constructor(){}

  showFirstCard(){
    this.showFirstGraph = true;
    this.showSecondGraph = false;
    this.showItems = true;
    this.user2 = this.user;
  }

  showSecondCard(){
    
    // this.showFirstGraph = false;
    // this.showSecondGraph = true;
    this.user = this.user2;
  }

}
