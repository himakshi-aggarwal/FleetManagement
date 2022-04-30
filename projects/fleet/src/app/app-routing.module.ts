import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vehicle-list',
    pathMatch: 'full'
  },
  {
    path: 'vehicle-list',
    loadChildren: () => import('./All-Vehicles/vehicles.module')
      .then(m => m.VehicleListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
