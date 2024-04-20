import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-third-item',
  templateUrl: './third-item.component.html',
  styleUrls: ['./third-item.component.scss']
})
export class ThirdItemComponent {

  user: string = "/assets/images/pic.png";
  user2: string = "/assets/images/profile1.png";
  button: string = "/assets/images/graphicz.gif"; 
  graph: string =  "/assets/images/graph1.png";
  squareImage: string = "/assets/images/lessthan.png"
  showFirstGraph:boolean = true;
  showSecondGraph:boolean = false;
  showItems: boolean = true;

  @Output() emitBooleanProperty$: EventEmitter<any> = new EventEmitter<any>();
  constructor(){}

  showFirstCard(){
    setTimeout(() => {
      this.showFirstGraph = true;
    this.showSecondGraph = false;
    this.showItems = true;
    this.user = "/assets/images/pic.png";
    this.emitBooleanProperty$.emit(true);
    },300)
  }

  showSecondCard(){
    setTimeout(() => {
      this.showFirstGraph = false;
      this.showSecondGraph = true;
      this.user = "/assets/images/profile1.png";
      this.emitBooleanProperty$.emit(false);
    },300)
  }

  
}
