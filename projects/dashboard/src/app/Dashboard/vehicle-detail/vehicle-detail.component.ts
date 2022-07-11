import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCalendar, faCalendarAlt, faClock, faExclamationTriangle, faMapMarker, faMapMarkerAlt, faMarker, faTruck, faUser, faWindowClose, faXRay } from '@fortawesome/free-solid-svg-icons';

export interface vehicleDetailModel {
  vehicleNumber: string,
  vehicleCode: string,
  vehicleState: string,
  vehicleInfo: {
    startDate: string,
    duration: string,
    distanceCovered: string,
    driver: string,
  },
  vehicleJourney: {
    place: string,
    time: string
  }
}

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  @Input() vehicleD!: vehicleDetailModel[];
  @Output() closeWindow: EventEmitter<boolean> = new EventEmitter();
  faXRay = faWindowClose;
  faExplanation = faExclamationTriangle;
  faCalender = faCalendarAlt;
  faClock = faClock;
  faTruck = faTruck;
  faUser = faUser;
  faMarker = faMapMarkerAlt;
  constructor() { }

  ngOnInit(): void { }

  closeDetailWindow(isClosed): void {
    this.closeWindow.emit(isClosed);
  }

}
