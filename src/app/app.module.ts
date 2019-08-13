import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { SearchProgressPipe } from './search-progress.pipe';
import { UsersWithMPipe } from './users-with-m.pipe';
import { BallComponent } from './ball/ball.component';
import { Ball2Component } from './ball2/ball2.component';

 

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    SearchPipe,
    SearchProgressPipe,
    UsersWithMPipe,
    BallComponent,
    Ball2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
