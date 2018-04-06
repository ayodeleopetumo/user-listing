import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('gMap', { read: ElementRef })
  gmapElement: ElementRef;
  map: google.maps.Map;
  @Input() latitude: any;
  @Input() longitude: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const mapProp = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
