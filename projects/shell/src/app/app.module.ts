import { FleetAppModule } from './../../../fleet/src/app/app.module';
import { DashboardAppModule } from './../../../dashboard/src/app/app.module';
import { SideBarComponent } from './navigation/side-bar/side-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    DashboardAppModule,
    FleetAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ShellAppModule { }
