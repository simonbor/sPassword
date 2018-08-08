import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'congratulations', component: CongratulationsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'credentials', component: CredentialsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
