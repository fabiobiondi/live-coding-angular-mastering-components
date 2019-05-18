import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'fb-group',
  animations: [
    trigger('collapsable', [
      state('opened', style({
        height: '*'
      })),
      state('closed', style({
        height: 0,
        padding: 0
      })),
      transition('opened <=> closed', [
        animate('0.7s cubic-bezier(0.77, 0, 0.175, 1)')
      ])
    ])
  ],
  template: `
  <div class="accordion-group">
    <div class="title" (click)="toggle.emit()">
      <i class="fa" [ngClass]="{
        'fa-arrow-down': opened,
        'fa-arrow-right': !opened
      }"></i>
      {{title}}
    </div>
    <div class="body"  [@collapsable]="opened ? 'opened' : 'closed'">
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
