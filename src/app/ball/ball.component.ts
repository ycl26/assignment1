import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {
 @Input() ball: string;
 @Output() delete = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.delete.emit(this.ball);
  }

}
