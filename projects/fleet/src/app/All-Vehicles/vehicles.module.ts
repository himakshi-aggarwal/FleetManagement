import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VEHICLE_ROUTES } from './vehicles.routes';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleListCardComponent } from './vehicle-list-card/vehicle-list-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VEHICLE_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    FontAwesomeModule,
    NgbModule
  ],
  declarations: [
      VehicleListCardComponent,
      VehicleListComponent,
      AddVehicleComponent
  ]
})
export class VehicleListModule { }
