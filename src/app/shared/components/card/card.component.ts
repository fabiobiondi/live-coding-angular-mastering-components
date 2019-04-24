import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fb-card',
  template: `
   <div class="card">
     <div class="content">
       <div class="title">{{title}}</div>
       <ng-content></ng-content>
     </div>
  </div>
  `,
  styleUrls: ['./card.css']
})
export class CardComponent {
  @Input() title: string;
}
