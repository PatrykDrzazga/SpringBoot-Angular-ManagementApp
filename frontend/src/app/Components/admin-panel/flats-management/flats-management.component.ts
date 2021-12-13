import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-flats-management',
  templateUrl: './flats-management.component.html',
  styleUrls: ['./flats-management.component.css']
})
export class FlatsManagementComponent implements OnInit {
  flats: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  	this.getAllFlats();
  }

  getAllFlats(): void {
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

  deleteFlat(id : number): void {
    this.adminService.deleteFlat(id)
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
