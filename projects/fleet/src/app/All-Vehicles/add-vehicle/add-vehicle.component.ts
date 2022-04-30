import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  public addCVehicleForm!: FormGroup;

  faSave = faSave;

  constructor(private fb: FormBuilder, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.addCVehicleForm = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      type: ['', Validators.required],
      status: ['Available', Validators.required],
      health: 100,
      driver: [''],
      vehicleImagePath: 'assets/images/parked.jpg'
    })
  }


  onAddVehicle(): void {
    if (this.addCVehicleForm.valid) {
      console.log(this.addCVehicleForm.value)
      this.dialogRef.closeAll();
    }

  }

  cancel(): void {
    this.dialogRef.closeAll();
  }

}
