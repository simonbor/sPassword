import { Component, OnInit } from '@angular/core';

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
    let subDomains = window.location.hostname.split('.');
    let host = subDomains[subDomains.length - 1] + ':' + window.location.port;

    window.open(window.location.protocol + '//' + host + '/congratulations', "_top");
  }

}
