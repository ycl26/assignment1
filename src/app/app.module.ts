import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { SearchProgressPipe } from './search-progress.pipe';
import { UsersWithMPipe } from './users-with-m.pipe';

 

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    SearchPipe,
    SearchProgressPipe,
    UsersWithMPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
