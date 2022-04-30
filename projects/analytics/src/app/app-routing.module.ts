import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full'
  },
  {
    path: 'analytics',
    loadChildren: () => import('./Analytics/analytics.module')
      .then(m => m.AnalyticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
