import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstname: null,
    lastname: null,
    birthdate: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
	const { username, password,  firstname, lastname, birthdate} = this.form;
    this.authService.register(username, password,  firstname, lastname, birthdate).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.addRoles(this.form.username)
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

  }

  addRoles(username: string): void {
  	this.authService.addRoles(username).subscribe(
    	data => {
  			console.log(data);
  		})
  }

}
