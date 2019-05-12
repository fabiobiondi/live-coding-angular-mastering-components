import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'fb-group',

  template: `
  <div class="mypanel">
    <div class="title" (click)="toggle.emit()">
      <i class="fa" [ngClass]="{
        'fa-arrow-down': opened,
        'fa-arrow-right': !opened
      }"></i>
      {{title}}
    </div>
    <div class="body"  *ngIf="opened">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./accordion-group.css']
})
export class AccordionGroupComponent {
  @Input() opened: boolean;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>(true);
}
