import { Component, ViewChild, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Chart } from 'chart.js';

@Component({
  selector: 'fb-chartjs',
  template: '<div style="width: 100%;"><canvas #host></canvas></div>',
})
export class ChartJSComponent implements OnChanges {
  @Input() config: ChartConfiguration;
  @ViewChild('host') host: ElementRef;
  chart: Chart;

  ngOnChanges(changes: SimpleChanges) {
    const { config } = changes;

    if (config.isFirstChange()) {
      this.chart = new Chart(this.host.nativeElement.getContext('2d'), config.currentValue);
    } else {
      this.chart.config = config.currentValue;
      this.chart.update();
    }
  }
}

// DOC
// update: https://www.chartjs.org/docs/latest/developers/api.html

// npm install "chart.js"
// npm install "@types/chart.js" --save-dev

