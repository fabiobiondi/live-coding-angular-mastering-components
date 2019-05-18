import { Component, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';

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
  @Input() lat;
  @Input() lng;
  @Input() zoom;
  @Input() height = 150;

  map: google.maps.Map;

  init() {
    console.log(this.zoom)
    const opts = { zoom: this.zoom || 8};
    this.map = new google.maps.Map(this.host.nativeElement, opts);
  }

  ngOnChanges(changes: SimpleChanges) {
    const { lat, lng, zoom }  = changes;
    if (
      (lat && lat.isFirstChange()) &&
      (lng && lng.isFirstChange())
    ) {
      this.init();
    }
    this.update(lat, lng, zoom);
  }

  update(lat, lng, zoom) {
    if (lat && lng && lat.currentValue && lng.currentValue) {
      this.map.setCenter(new google.maps.LatLng(lat.currentValue, lng.currentValue));
    }

    if (zoom && zoom.currentValue) {
      this.map.setZoom(zoom.currentValue);
    }
  }
}
