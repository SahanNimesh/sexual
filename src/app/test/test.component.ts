import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
	template: `
		<h2>{{ name | uppercase }}</h2>
		<h2>{{ message | titlecase }}</h2>
		<h2>{{ name | slice:3:5 }}</h2>
		<h2>{{ person | json }}</h2>
  `,
	styles: []
})
export class TestComponent implements OnInit {
	public name = "Codevolution";
	public message = "Welcom To Codevolution";
	public person = {
		"firstName": "Sahan",
		"lastName": "Weerakoon"
	};
	constructor() { }

  ngOnInit() {
  }
}
