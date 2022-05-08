import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    })
  });

  constructor(private location: Location, private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
        name: {
          firstName: this.signUpForm.get('name')?.get('firstName')?.value,
          lastName: this.signUpForm.get('name')?.get('lastName')?.value
        }
      }
      this.userService.create(user).then(_ => {
        console.log('user created!');
        this.router.navigateByUrl('/profile');
      }).catch(error => {
        console.error(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }

  cancel() {
    this.location.back();
  }

}
