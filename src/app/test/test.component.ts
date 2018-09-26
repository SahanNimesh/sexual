import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
	template: `
		<h2>
			{{ "Hello " + sexData.lastName }}
		</h2>
		<button (click)="sendEventMsg()">Send Event Message</button>
  `
	styles: [`
		h2{
			font-family: arial;
		}
	`]
})
export class TestComponent implements OnInit {
	// @Input('prentData') public name;
	@Input() public sexData;

	@Output() public childEvent = new EventEmitter();
	sendEventMsg(){
		this.childEvent.emit('Hello Fucking World');
	}
	constructor() { }

  ngOnInit() {
  }
}
