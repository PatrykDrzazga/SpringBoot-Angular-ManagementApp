import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-add-edit-building',
  templateUrl: './add-edit-building.component.html',
  styleUrls: ['./add-edit-building.component.css']
})
export class AddEditBuildingComponent implements OnInit {
  isAddMode: any;
  building: any;
  id: any;
  form: any = {
    name: null,
    address: null
  };
  name: any;
  address: any;

  constructor(  
        private route: ActivatedRoute,
        private router: Router,
        private adminService: AdminService) { }

  ngOnInit(): void {
  	this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
         this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required)
    });
    if (!this.isAddMode) {
       this.getBuilding(this.id)  
   }
  }

   onSubmit(): void {
    if (this.isAddMode) {
        this.addBuilding(this.form.controls['name'].value, this.form.controls['address'].value);
        } else {
        this.updateBuilding(this.id, this.form.controls['name'].value, this.form.controls['address'].value);
    }
    
  }

  addBuilding(name: string, address: string): void {
    this.adminService.addBuilding(name, address).subscribe(
        data => {
          console.log(data);
          window.location.href="/admin/buildings"
        },
        error => {
          console.log(error);
        });
  }

  updateBuilding(id: number, name: string, address: string): void {
    this.adminService.updateBuilding(id, name, address).subscribe(
        data => {
          console.log(data);
          window.location.href="/admin/buildings"
        },
        error => {
          console.log(error);
        });
  }

    getBuilding(id: number): void {
    this.adminService.getBuilding(id)
      .subscribe(
        data => {
          this.building = data;
          console.log(data);
          this.form.controls['name'].setValue(data.name);  
          this.form.controls['address'].setValue(data.address);  
        },
        error => {
          console.log(error);
        });
  }

}
