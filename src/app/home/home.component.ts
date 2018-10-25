import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show: boolean = false;

  goSubDomain(resName: string) {
    if(resName.length < 1)
      return;
      
    window.open(window.location.protocol + '//' + resName + '.' + window.location.host + '/credentials', "_top");
  }
}
