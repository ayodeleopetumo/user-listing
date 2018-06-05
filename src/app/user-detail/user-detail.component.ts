import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {} from '@types/googlemaps';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {
  @Input() user: any;
  @Output() response: EventEmitter<any> = new EventEmitter();

  showMap: boolean;
  edit: boolean;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // this.user = Object.assign({}, changes.user);
  }

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
