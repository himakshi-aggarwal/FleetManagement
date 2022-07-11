import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DASHBOARD_ROUTES } from './dashboard.routes';

import { HomeComponent } from './home/home.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';


@NgModule({
    declarations: [
        VehicleCardComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(DASHBOARD_ROUTES),
        FontAwesomeModule,
        MatTabsModule,
        GoogleMapsModule
    ],

})
export class DashboardHomeModule { }
