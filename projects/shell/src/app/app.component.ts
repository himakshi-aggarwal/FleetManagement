import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { buildRoutes } from '../menu-utils';
import { LookupService } from './microfrontend/lookup.service';
import { Microfrontend } from './microfrontend/microfrontend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faHamburger = faBars;
  title = 'Fleet-Management';

  microfrontends: Microfrontend[] = [];

  constructor(private router: Router, private lookupService: LookupService) { }

  // async ngOnInit(): Promise<void> {
  //   this.microfrontends = await this.lookupService.lookup();
  //   const routes = buildRoutes(this.microfrontends);
  //   this.router.resetConfig(routes);
  // }
}