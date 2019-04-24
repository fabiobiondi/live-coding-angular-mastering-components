import { Component, ViewChild, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'fb-gmap',
  template: `
  <div #host
       style="width: 100%;"
       [style.height.px]="height"></div>
  `
})
export class GMapComponent implements OnChanges {
  @ViewChild('host') host;
  @Input() lat = 44; // default
  @Input() lng = 13; // default
  @Input() zoom = 4; // default
  @Input() height = 150; // default

  /**
   * Google Map instance
   */
  map: google.maps.Map;

  constructor() {}


  init() {
    const opts = {
      zoom: this.zoom || 3,
    };

    this.map = new google.maps.Map(this.host.nativeElement, opts);
    this.map.setCenter(new google.maps.LatLng(this.lat, this.lng));
  }

  ngOnChanges(changes: SimpleChanges) {
    const { lat, lng, zoom }  = changes;
    if (lat && lat.isFirstChange() || lng && lng.isFirstChange()) {
      this.init();
    }
    this.render(lat, lng, zoom);
  }

  render(lat, lng, zoom) {
    if (lat && lng && lat.currentValue && lng.currentValue) {
      this.map.setCenter(new google.maps.LatLng(lat.currentValue, lng.currentValue));
    }

    if (zoom) {
      this.map.setZoom(zoom.currentValue);
    }
  }
}
