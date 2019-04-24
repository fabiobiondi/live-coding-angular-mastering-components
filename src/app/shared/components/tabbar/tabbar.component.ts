import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fb-tab-bar',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item mr-3" *ngIf="icon">
        <i [class]="icon"></i>
      </li>

      <li class="nav-item"
          *ngFor="let tab of items"
          (click)="select(tab)">
        <a class="nav-link" [ngClass]="{'active': tab.id === active?.id}">
          {{tab.label}}
        </a>
      </li>
    </ul>
  `,
})
export class TabBarComponent {
  @Input() items;
  @Input() active;
  @Input() icon: string;
  @Output() tabSelect: EventEmitter<any>;

  constructor() {
    this.tabSelect = new EventEmitter();
  }

  select(tab) {
    this.tabSelect.emit(tab);
  }
}
