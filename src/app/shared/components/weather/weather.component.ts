import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meteo } from './weather';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const options = 'units=metric';
const token = 'eb03b1f5e5afb5f4a4edb40c1ef2f534';

@Component({
  selector: 'fb-weather',
  template: `
    <img *ngIf="data" [src]="'https://openweathermap.org/img/w/' + data?.weather[0].icon + '.png'">
    {{data?.weather[0].description}} - {{data?.main.temp}}°
  `
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input() city: string;  // Location name
  data: Meteo;            // Meteo data

  constructor(private http: HttpClient) {}

  // Added because this component is dynamically created by the 'loader' directive otherwise is not necessary
  // read: https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e
  ngOnInit() {
    this.fetchMeteo(this.city);
  }

  ngOnChanges(changes: SimpleChanges) {
    const { city } = changes;
    this.fetchMeteo(city.currentValue);
  }

  fetchMeteo(text: string) {
    this.http.get<Meteo>(`${baseURL}${text}&${options}&APPID=${token}`)
      .subscribe(res => {
        this.data = res;
      });
  }
}
