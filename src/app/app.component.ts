import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Google Chrome Password Saver';
  hostname = `${window.location.protocol}//${environment.hostname}:${window.location.port}`;
}
