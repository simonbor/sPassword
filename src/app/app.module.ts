import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AppRoutingModule } from './app-routing.module';
import { CongratulationsComponent } from './congratulations/congratulations.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    CongratulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
