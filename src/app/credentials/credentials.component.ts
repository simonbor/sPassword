import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  goDomain() {
    const url = `${window.location.protocol}//${environment.hostname}:${window.location.port}/congratulations/`;
    window.open(url, "_top");
  }

}
