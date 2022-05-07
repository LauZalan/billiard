import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.email.value === 'admin' && this.password.value === 'admin') {
      this.router.navigateByUrl('/profile');
    }
  }

}
