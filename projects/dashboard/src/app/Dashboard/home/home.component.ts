import { Component, OnInit } from '@angular/core';
import { ActiveVehicle } from '../vehicle-card/vehicle-card.component';
import { vehicleDetailModel } from '../vehicle-detail/vehicle-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allVehicles: ActiveVehicle[] = [
    { vehicleDate: '26 April,21/1 hour 15mins', type: 'parked', vehicleImagePath: 'assets/images/truck-available.png', vehicleNumber: 'PN 1756', error: false },
    { vehicleDate: '25 Jan,21/2 hour 15mins', type: 'driving', vehicleImagePath: 'assets/images/truck-onroute.png', vehicleNumber: 'FT 1112', error: false },
    { vehicleDate: '26 April,21/1 hour 15mins', type: 'driving', vehicleImagePath: 'assets/images/truck-onroute.png', vehicleNumber: 'GW 1005', error: false },
    { vehicleDate: '26 April,21/1 hour 15mins', type: 'parked', vehicleImagePath: 'assets/images/truck-available.png', vehicleNumber: 'VM 2315', error: false },
    { vehicleDate: '26 April,21/1 hour 15mins', type: 'out', vehicleImagePath: 'assets/images/van-outofservice.png', vehicleNumber: 'RC 9654', error: true },
    { vehicleDate: '26 April,21/1 hour 15mins', type: 'parked', vehicleImagePath: 'assets/images/truck-available.png', vehicleNumber: 'KA 77771', error: false },
    { vehicleDate: '26 April,21/1 hour 15mins', type: 'parked', vehicleImagePath: 'assets/images/truck-available.png', vehicleNumber: 'MN 78766', error: false },
  ];

  allVehicleDetails: vehicleDetailModel[] = [
    { vehicleNumber: 'PN 1756', vehicleCode: '1FVAF3CV84DM31815', vehicleState: 'PARKED', vehicleInfo: { startDate: 'April 26/10:21 AM', duration: '15Hours', distanceCovered: '750mi', driver: 'Shiv Kumar' }, vehicleJourney: { place: 'Kaduru, Karnataka, India', time: 'Apr 26, 4:00 PM' } },
    { vehicleNumber: 'FT 1112', vehicleCode: '1VANF3CV84DM24561', vehicleState: 'DRIVING', vehicleInfo: { startDate: 'Jan 25/5:00 AM', duration: '10Hours', distanceCovered: '300mi', driver: 'Dilip Mehta' }, vehicleJourney: { place: 'Hasan, Karnataka, India', time: 'Jan 25, 7:00 AM' } },
    { vehicleNumber: 'GW 1005', vehicleCode: '9ACUC3CV84DM22221', vehicleState: 'DRIVING', vehicleInfo: { startDate: 'April 27/8:00 AM', duration: '20Hours', distanceCovered: '550mi', driver: 'Sandeep Nag' }, vehicleJourney: { place: 'Vishakapatnam, Andra Pradesh, India', time: 'Apr 27, 11:00 AM' } },
    { vehicleNumber: 'VM 2315', vehicleCode: '2YUCR4ST98UR56234', vehicleState: 'DRIVING', vehicleInfo: { startDate: 'Jan 25/5:00 AM', duration: '10Hours', distanceCovered: '300mi', driver: 'Dilip Mehta' }, vehicleJourney: { place: 'Bengaluru, Karnataka, India', time: 'MAr 05, 7:00 AM' } },
    { vehicleNumber: 'RC 9654', vehicleCode: '2URTW5TK88RR77345', vehicleState: 'DRIVING', vehicleInfo: { startDate: 'Jan 25/5:00 AM', duration: '10Hours', distanceCovered: '300mi', driver: 'Dilip Mehta' }, vehicleJourney: { place: 'Mumbai, Maharastra, India', time: 'Nov 10, 10:00 PM' } },
    { vehicleNumber: 'KA 77771', vehicleCode: '7PORT9PU23PT44551', vehicleState: 'DRIVING', vehicleInfo: { startDate: 'Jan 25/5:00 AM', duration: '10Hours', distanceCovered: '300mi', driver: 'Dilip Mehta' }, vehicleJourney: { place: 'Chennai, Tamil Nadu, India', time: 'Oct 15, 12:00 PM' } },
    { vehicleNumber: 'MN 78766', vehicleCode: '4MNFT6UR90KA56432', vehicleState: 'DRIVING', vehicleInfo: { startDate: 'Jan 25/5:00 AM', duration: '10Hours', distanceCovered: '300mi', driver: 'Dilip Mehta' }, vehicleJourney: { place: 'Trivendrum, Kerala, India', time: 'Dec 01, 11:00 PM' } }
  ]

  filteredVehicle: ActiveVehicle[] = [];
  vehicleDetail!: vehicleDetailModel[];
  options: google.maps.MapOptions = {
    center: { lat: 12, lng: 77 },
    zoom: 6
  };

  isWindowClosed: boolean = false;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom: number = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: false, icon: { url: 'assets/images/truck-parked-marker.png' } };

  markerPositions: any[] = [
    { Marker: { lat: 12, lng: 78 }, icono: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { Marker: { lat: 15, lng: 80 }, icono: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { Marker: { lat: 11, lng: 77 }, icono: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { Marker: { lat: 13, lng: 76 }, icono: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { Marker: { lat: 14, lng: 75 }, icono: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { Marker: { lat: 12, lng: 76 }, icono: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { Marker: { lat: 12, lng: 77 }, icono: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' }];

  constructor() { }

  ngOnInit(): void {
    this.filteredVehicle = this.allVehicles;
  }

  getVehicleDetail(vehicle): void {
    this.isWindowClosed = true;
    this.vehicleDetail = this.allVehicleDetails.filter(a => a['vehicleNumber'] === vehicle['vehicleNumber']);
    console.log(this.vehicleDetail)
  }

  closeDetailWindow(event): void {
    this.isWindowClosed = event;
  }

  tabClick(event) {
    switch (event.index) {
      case 0:
        this.filteredVehicle = this.allVehicles;
        break;
      case 1:
        this.filteredVehicle = this.allVehicles.filter(a => a.type === 'driving');
        break;
      case 2:
        this.filteredVehicle = this.allVehicles.filter(a => a.type === 'parked')
    }
  }
}
