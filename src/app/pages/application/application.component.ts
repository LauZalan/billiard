import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  application = new FormGroup({
    user: new FormControl(''),
    name: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  apply() {
    console.log(this.application.value)
  }

  cancelApplication() {
    window.location.reload();
  }

}
