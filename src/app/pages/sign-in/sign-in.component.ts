import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.login(this.email.value, this.password.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/profile');
    }).catch(error => {
      console.error(error);
    });
  }

}
