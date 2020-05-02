import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;
  public error: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  login(): void {
    this.authService.login({
      username: this.loginFormGroup.value.username,
      password: this.loginFormGroup.value.password
    }, () => {
      this.router.navigate(['/home']);
    }, () => {
      this.error = true;
    });
  }

}
