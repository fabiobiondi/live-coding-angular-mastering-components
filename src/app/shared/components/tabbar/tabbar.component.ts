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
          (click)="select(tab)">
        <a class="nav-link" [ngClass]="{'active': tab.id === active?.id}">
          {{tab.label}} <i [class]="actionIcon" (click)="iconActionHandler($event, tab)"></i>
        </a>
      </li>
    </ul>
  `,
})
export class TabBarComponent {
  @Input() items;
  @Input() active;
  @Input() mainIcon: string;
  @Input() actionIcon: string;
  @Output() tabSelect: EventEmitter<any> = new EventEmitter();
  @Output() iconSelect: EventEmitter<any> = new EventEmitter();

  select(tab) {
    this.tabSelect.emit(tab);
  }

  iconActionHandler(event: MouseEvent, tab: any) {
    event.stopPropagation();
    this.iconSelect.emit(tab);
  }
}
