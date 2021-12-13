import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  	if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUserRole() || '';
      window.location.href="/user"
    }
  }

  onSubmit(): void {
  	const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      response => {
        this.tokenStorage.saveToken(response.headers.get("Authorization"));
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.getUser(username);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  getUser(username: string): void {
    this.authService.getUser(username).subscribe(
      data => {
        this.tokenStorage.saveUser(data);
        this.getUserRole(username);
      })
  }

  getUserRole(username: string): void {
    this.authService.getUserRole(username).subscribe(
      data => {
        this.tokenStorage.saveUserRole(data.authority);
        this.reloadPage();
      })
  }

  reloadPage(): void {
    window.location.href="/user"
  }

}
