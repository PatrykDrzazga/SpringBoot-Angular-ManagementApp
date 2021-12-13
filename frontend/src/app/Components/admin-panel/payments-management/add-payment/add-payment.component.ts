import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  form: any;
  flats: any;
  users: any;
  flat: any = {
    id: null,
  };
  user: any = {
    id: null,
  };
  constructor(  	    
  	private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService) { }

  ngOnInit(): void {
  	this.form = new FormGroup({
      userid: new FormControl('', [Validators.required]),
      flatid: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.getFlats();
    this.getUsers();
  }

  onSubmit(): void {
   	this.user.id = this.form.controls['userid'].value;
    this.flat.id = this.form.controls['flatid'].value;
    this.addPayment(this.user, this.flat, this.form.controls['amount'].value, this.form.controls['description'].value); 
  }

  addPayment(user: any, flat: any, amount: number, description: string): void {
    this.adminService.addPayment(user, flat, amount, description).subscribe(
        data => {
          console.log(data);
          window.location.href="/admin/payments"
        },
        error => {
          console.log(error);
        });
  }

  getUsers(): void {
    this.adminService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getFlats(): void {
    this.adminService.getAllFlats()
      .subscribe(
        data => {
          this.flats = data; 
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
