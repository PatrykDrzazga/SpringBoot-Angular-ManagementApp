import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  user: any;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  	if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }

}
