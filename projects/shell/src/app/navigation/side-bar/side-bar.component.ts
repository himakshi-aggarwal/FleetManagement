import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faChartPie, faHamburger, faHome, faPlusSquare, faReceipt, faSearchPlus, faSignOutAlt, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faSearchPlus = faSearchPlus;
  faPieChart = faChartPie;
  faTruck = faTruck;
  faHome = faHome;

  faReceipt = faReceipt;
  faPlusSquare = faPlusSquare;
  faSignOutAlt = faSignOutAlt;
  isUserLoggedIn: boolean = false;
  isUserLogOff: boolean = false;
  panelOpenState = false;
  constructor(private readonly route: Router) {

  }

  ngOnInit(): void {

  }
  logout() {
    this.isUserLogOff = false;
    this.isUserLoggedIn = false;
  }

  navigateToHomePage(): void {
    this.route.navigate(['']);
  }

}
