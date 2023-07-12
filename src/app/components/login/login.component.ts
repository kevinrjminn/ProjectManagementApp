import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formControls: any = {};

  submitted = false;
  loading = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService, private router: Router) { }
  // constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  // get formControls() {
  //   return this.loginForm.controls;
  // }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(username, password).subscribe(
      data => {
        if (data) {
          this.router.navigate(['/notification']);
        } else {
          this.loading = false;
          this.errorMessage = 'Failed to login';
        }
      },
      error => {
        this.loading = false;
        this.errorMessage = 'Failed to login';
        console.error(error);
      }
    );
  }
}
