import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  reservation = new FormGroup({
    type: new FormControl(''),
    start: new FormControl(''),
    duration: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  reserve() {
    console.log(this.reservation.value);
  }

  cancelRes() {
    window.location.reload();
  }

}
