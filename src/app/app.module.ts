import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FirstItemComponent } from './components/first-item/first-item.component';
import { SecondItemComponent } from './components/second-item/second-item.component';
import { ThirdItemComponent } from './components/third-item/third-item.component';
import {MatCardModule} from '@angular/material/card';
import { FourthItemComponent } from './components/fourth-item/fourth-item.component';
import { FifthItemComponent } from './components/fifth-item/fifth-item.component';
import { FirstTableComponent } from './components/first-table/first-table.component';
import { SecondTableComponent } from './components/second-table/second-table.component';
import {MatTabsModule} from '@angular/material/tabs';

const materialModules = [MatToolbarModule,MatIconModule, MatCardModule, MatTabsModule]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstItemComponent,
    SecondItemComponent,
    ThirdItemComponent,
    FourthItemComponent,
    FifthItemComponent,
    FirstTableComponent,
    SecondTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// npm config set strict-ssl false