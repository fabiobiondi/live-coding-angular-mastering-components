import { Component, ContentChildren, QueryList, AfterContentInit, DoCheck } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group.component';

@Component({
  selector: 'fb-accordion',
  template: `
    <ng-content></ng-content>
  `,
})
export class AccordionComponent  implements AfterContentInit, DoCheck {
  @ContentChildren(AccordionGroupComponent) groups: QueryList<AccordionGroupComponent>;
  prevGroups: QueryList<AccordionGroupComponent>;

  ngAfterContentInit() {
    this.groups.toArray().forEach((g) => {
      g.toggle.subscribe(() => {
        this.openGroup(g);
      });
    });
    // open the first panel but it generates an error: ExpressionChangedAfterItHasBeenCheckedError
    // so we use ngDoCheck below
    // this.groups.toArray()[0].opened = true;
  }

  ngDoCheck() {
    if (this.prevGroups !== this.groups) {
      this.prevGroups = this.groups;
      this.groups.toArray()[0].opened = true;
    }
  }

  openGroup(group: AccordionGroupComponent) {
    // close other groups
    this.groups.toArray().forEach(g => g.opened = false);
    // open current group
    group.opened = true;
  }
}
