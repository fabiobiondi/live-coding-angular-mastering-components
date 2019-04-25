import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fb-tab-bar',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item mr-3" *ngIf="mainIcon">
        <i [class]="mainIcon"></i>
      </li>

      <li class="nav-item"
          *ngFor="let tab of items"
          (click)="tabClickHandler(tab)">
        <a class="nav-link" [ngClass]="{'active': tab.id === active?.id}">
          {{tab.label}} <i [class]="actionIcon" (click)="iconActionHandler($event, tab)"></i>
        </a>
      </li>
    </ul>
  `,
})
export class TabBarComponent<T> {
  @Input() items: T;
  @Input() active: T;
  @Input() mainIcon: string;
  @Input() actionIcon: string;
  @Output() tabClick: EventEmitter<T> = new EventEmitter();
  @Output() iconSelect: EventEmitter<T> = new EventEmitter();

  tabClickHandler(tab: T) {
    this.tabClick.emit(tab);
  }

  iconActionHandler(event: MouseEvent, tab: T) {
    console.log(tab.id)
    event.stopPropagation();
    this.iconSelect.emit(tab);
  }
}
