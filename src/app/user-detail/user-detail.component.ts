import { Component, OnInit, Input } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: any;
  showMap: boolean;
  edit: boolean;

  constructor() {}

  ngOnInit(): void {
    this.showMap = false;
    this.edit = false;
  }

  toggleEdit(event) {
    this.edit = !this.edit;
    this.edit
      ? (event.srcElement.innerText = 'Done')
      : (event.srcElement.innerText = 'Edit');
  }
}
