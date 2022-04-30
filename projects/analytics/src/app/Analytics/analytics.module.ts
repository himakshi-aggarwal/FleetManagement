import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsHomeComponent } from './analytics-home/analytics-home.component';
import { ANALYTICS_ROUTES } from './analytics.routes';

@NgModule({
    declarations: [
        AnalyticsHomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ANALYTICS_ROUTES),
    ]
})
export class AnalyticsModule { }
