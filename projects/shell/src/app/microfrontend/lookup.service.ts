import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'Dashboard',
                routePath: 'dashboard',
                ngModuleName: 'DashboardHomeModule'
            },
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:3002/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'VehicleList',
                routePath: 'vehicle-list',
                ngModuleName: 'VehicleListModule'
            },
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:3003/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'Analytics',
                routePath: 'analytics',
                ngModuleName: 'AnalyticsModule'
            }
        ] as Microfrontend[]);
    }
}