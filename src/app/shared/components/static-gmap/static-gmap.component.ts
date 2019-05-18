import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

const baseURL = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const token = 'AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus'

@Component({
  selector: 'fb-static-gmap',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img *ngIf="url" [src]="url" style="width: 100%;" />
`
})
export class StaticGmapComponent implements OnInit, OnChanges {
  @Input() lat: number;
  @Input() lng: number;
  @Input() zoom = 6;
  @Input() w = 200;
  @Input() h = 100;
  url: string;

  // Added because this component is dynamically created by the 'loader' directive otherwise is not necessary
  // read: https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e
  ngOnInit() {
    this.setURL();
  }

  ngOnChanges() {
    this.setURL();
  }

  setURL() {
    this.url = `${baseURL}${this.lat},${this.lng}&zoom=${this.zoom}&size=${this.w}x${this.h}&key=${token}`
  }
}
