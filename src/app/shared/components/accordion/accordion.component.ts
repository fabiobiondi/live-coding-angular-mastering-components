import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, ApplicationRef, Input } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group.component';

@Component({
  selector: 'fb-accordion',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
`,
  styleUrls: ['accordion.css']
})
export class AccordionComponent  implements AfterContentInit {
  @ContentChildren(AccordionGroupComponent) groups: QueryList<AccordionGroupComponent>;

  ngAfterContentInit() {
    this.groups.toArray().forEach((g) => {
      g.toggle.subscribe(() => {
        this.openGroup(g);
      });
    });
    // this.groups.toArray()[0].opened = true;
  }

  openGroup(group: AccordionGroupComponent) {
    // close other groups
    this.groups.toArray().forEach(g => g.opened = false);
    // open current group
    group.opened = true;
  }
}
