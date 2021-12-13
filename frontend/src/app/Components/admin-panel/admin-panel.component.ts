import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  user: any;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  	if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }

}
