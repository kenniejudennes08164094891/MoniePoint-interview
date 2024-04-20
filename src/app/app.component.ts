import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TeamApt';
  backgroundImage: string = "/assets/images/bg2.png";
  showFirstCard:boolean = true;
  showOthers:boolean = true;

  getBooleanProperty(event:any){
  //  console.log("event>>>", event);
    this.showOthers = event
  }

}
