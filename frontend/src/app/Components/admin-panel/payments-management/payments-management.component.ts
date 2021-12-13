import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-payments-management',
  templateUrl: './payments-management.component.html',
  styleUrls: ['./payments-management.component.css']
})
export class PaymentsManagementComponent implements OnInit {
  payments: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  	this.getAllPayments();
  }

  getAllPayments(): void {
    this.adminService.getAllPayments()
      .subscribe(
        data => {
          this.payments = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

   deletePayment(id : number): void {
    this.adminService.deletePayment(id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }
}
