import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route : Router,
  ) { }

  ngOnInit() {
  }

  onClick(){
    console.log('button clicked');
    this.route.navigate(["signin"]);
  }
}
