import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-add-edit-flat',
  templateUrl: './add-edit-flat.component.html',
  styleUrls: ['./add-edit-flat.component.css']
})
export class AddEditFlatComponent implements OnInit {
  isAddMode: any;
  flat: any;
  id: any;
  form: any = {
    name: null,
    number: null,
    buildingid: null,
    tenantid: null
  };
  name: any;
  number: any;
  buildings: any;
  users: any;
  building: any = {
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
  	this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', Validators.required),
      buildingid: new FormControl('', Validators.required),
      tenantid: new FormControl('', Validators.required)
    });
    if (!this.isAddMode) {
       this.getFlat(this.id)  
   } 
   	   this.getBuildings();
   	   this.getUsers();
   
  }


   onSubmit(): void {
   	this.building.id = this.form.controls['buildingid'].value;
    this.user.id = this.form.controls['tenantid'].value;
    if (this.isAddMode) {
        this.addFlat(this.form.controls['name'].value, this.form.controls['number'].value, 
        	this.building, this.user);
        } else {
        this.updateFlat(this.id, this.form.controls['name'].value, this.form.controls['number'].value, 
        	this.building, this.user);
    }   
  }

  addFlat(name: string, number: number, building : any, user: any): void {
    this.adminService.addFlat(name, number, building, user).subscribe(
        data => {
          console.log(data);
          window.location.href="/admin/flats"
        },
        error => {
          console.log(error);
        });
  }

  updateFlat(id: number, name: string, number: number, building : any, user: any): void {
    this.adminService.updateFlat(this.id, name, number, building, user).subscribe(
        data => {
          console.log(data);
          window.location.href="/admin/flats"
        },
        error => {
          console.log(error);
        });
  }

  getBuildings(): void {
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

  getFlat(id: number): void {
    this.adminService.getFlat(id)
      .subscribe(
        data => {
          this.flat = data;
          this.form.controls['name'].setValue(data.name);  
          this.form.controls['number'].setValue(data.number);
          this.form.controls['buildingid'].setValue(data.building.id);
          this.form.controls['tenantid'].setValue(data.user.id);     
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
