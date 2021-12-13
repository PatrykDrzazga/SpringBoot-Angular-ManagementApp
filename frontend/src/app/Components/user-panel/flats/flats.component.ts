import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {
  flats: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  	this.getAllFlats();
  }

  getAllFlats(): void {
    this.userService.getAllFlats()
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
