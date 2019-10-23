import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  enableSticky = true;

  constructor() {
  }

  ngOnInit() {
  }

  log(event) {
    console.log(event);
  }

}
