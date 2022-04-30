import { AnalyticsModule } from './../../../analytics/src/app/Analytics/analytics.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        exposedModule: './Module'
      })
        .then(m => m.DashboardHomeModule)
  },
  {
    path: 'vehicle-list',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        exposedModule: './Module'
      })
        .then(m => m.VehicleListModule)
  },
  {
    path: 'analytics',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3003/remoteEntry.js',
        exposedModule: './Module'
      })
        .then(m => m.AnalyticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
