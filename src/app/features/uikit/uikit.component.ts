import { Component } from '@angular/core';
import { add, CHART_DATA, COUNTRIES, DASHBOARD } from '../../mock.data';
import { Country } from '../../model/country';
import { DashboardWidget } from '../../model/dashboard-widget';

@Component({
  selector: 'fb-uikit',
  template: `
    <div class="fixed-top">
      <fb-card>
        <fb-tab-bar
          mainIcon="fa fa-window-restore fa-2x"
          actionIcon="fa fa-external-link"
          fieldName="label"
          [active]="country"
          [items]="countries"
          (tabClick)="selectTab($event)"
          (iconSelect)="gotoWikipedia($event)"
        ></fb-tab-bar>
      </fb-card>
    </div>

    <div class="container" style="margin-top: 120px">
      <fb-grid>
        <fb-card title="Static Map & Weather Components">
          <fb-static-gmap [lat]="country.lat" [lng]="country.lng" [zoom]="zoom" w="300" h="100"></fb-static-gmap>
          <div>
            <i class="fa fa-plus-circle fa-2x mr-2" (click)="zoom = zoom + 1"></i>
            <i class="fa fa-minus-circle fa-2x" (click)="zoom = zoom - 1"></i>
            <div class="pull-right">
              <fb-weather [city]="country.label"></fb-weather>
            </div>
          </div>
        </fb-card>
        <fb-card [title]="'Chart.JS: ' + country.label">
          <fb-chartjs [config]="chartData"></fb-chartjs>
        </fb-card>
      </fb-grid>

      <fb-grid>
        <fb-card title="Google Map API">
          <fb-gmap [lat]="country.lat" [lng]="country.lng" [zoom]="zoom"></fb-gmap>
        </fb-card>
        <fb-card title="Accordion">
          <fb-accordion>
            <fb-group
              *ngFor="let c of countries"
              [title]="c.label"
            >
              <fb-gmap [lat]="c.lat" [lng]="c.lng" [zoom]="zoom"></fb-gmap>
            </fb-group>
          </fb-accordion>
        </fb-card>
      </fb-grid>

      <h3 class="text-center">
        Dynamic Components
        <button
          *ngIf="!dashboard"
          class="btn btn-outline-dark"
          (click)="loadDashboard()">LOAD</button>
      </h3>
      <fb-grid>
        <fb-card *ngFor="let widget of dashboard">
          <ng-container [fbLoader]="widget"></ng-container>
        </fb-card>
      </fb-grid>
    </div>
  `,
  styles: []
})
export class UikitComponent {
  chartData = CHART_DATA;
  dashboard: DashboardWidget[];
  zoom = 10;

  countries: Country[] = COUNTRIES;
  country: Country = this.countries[0];

  selectTab(c: Country) {
    this.country = c;
    this.chartData = add(c.temp);
  }

  gotoWikipedia(c: Country) {
    window.open(`https://it.wikipedia.org/wiki/${c.label}`);
  }

  loadDashboard() {
    this.dashboard = DASHBOARD;
  }
}

