import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  //my_location  brightness_5 brightness_low
  avatar: string = "/assets/images/avatar.png";
  flag: string = "/assets/images/vector1.png";
  framer: string = "/assets/images/framer.png";
}
