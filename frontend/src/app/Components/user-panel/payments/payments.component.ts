import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: any;
  user: any;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  	if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  	this.getPayments();
  }


  getPayments(): void {
    this.userService.getPayments(this.user.id, this.user.email, this.user.enabled, this.user.firstName, this.user.lastName,
     this.user.birthDate)
      .subscribe(
        data => {
          this.payments = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
