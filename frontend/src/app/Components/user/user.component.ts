import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLoggedIn = false;
  role = '';
  user = '';

  constructor(private tokenStorage: TokenStorageService) { 
  }

  ngOnInit(): void {
  	if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUserRole() || '';
      this.user = this.tokenStorage.getUser();
    }
  }

}
