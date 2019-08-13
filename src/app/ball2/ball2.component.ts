import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ball2',
  templateUrl: './ball2.component.html',
  styleUrls: ['./ball2.component.css']
})
export class Ball2Component implements OnInit {
  @Input() ball: string;
  @Output() delete = new EventEmitter()
   constructor() { }
 
   ngOnInit() {
   }
 
   onClick() {
     this.delete.emit(this.ball);
   }
 
 }
 