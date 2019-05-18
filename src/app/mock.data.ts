import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CardComponent } from './shared/components/card/card.component';
import { StaticGmapComponent } from './shared/components/static-gmap/static-gmap.component';
import { TabBarComponent } from './shared/components/tabbar/tabbar.component';
import { WeatherComponent } from './shared/components/weather/weather.component';
import { Type } from '@angular/core';

export const COUNTRIES = [
  { id: 1001, label: 'Trieste', lat: 45.6, lng: 13.77, temp: [12, 19, 3, 5, 2, 3]},
  { id: 1002, label: 'Paris', lat: 48.8, lng: 2.35, temp: [12, 19, 3, 35, 2, 3]},
  { id: 1003, label: 'New York', lat: 40, lng: -74, temp: [12, 19, 23, 25, 12, 3]}
];

export class Country {
  id: number;
  label: string;
  lat: number;
  lng: number;
  temp: Array<number>;
}

export let CHART_DATA: ChartConfiguration = {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      data: [12, 19, 9, 15, 22, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    legend:  null,
  }
};

export function add(data) {
  const cloned = {...CHART_DATA};
  cloned.data.datasets[0].data = data;
  return cloned;
}


/**
 * LIST OF DYNAMIC COMPONENTS
 */

export interface DashboardWidget {
  type: Type<any>;
  data: {[key: string]: any};
}

export const DASHBOARD: DashboardWidget[] = [
  {
    type: StaticGmapComponent,
    data: {
      lat: 43,
      lng: 13,
      zoom: 4
    }
  },
  {
    type: WeatherComponent,
    data: {
      city: 'Trieste'
    }
  },
  {
    type: CardComponent,
    data: {
      title: 'ciao',
    }
  },
  {
    type: TabBarComponent,
    data: {
      items: [ { id: 1001, label: 'One'}, { id: 1002, label: 'Two'}],
      active: { id: 1002, label: 'Two'}
    }
  }
];
