import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  buildings: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  	this.getAllBuildings();
  }

  getAllBuildings(): void {
    this.adminService.getAllBuildings()
      .subscribe(
        data => {
          this.buildings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

   deleteBuilding(id : number): void {
    this.adminService.deleteBuilding(id)
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
