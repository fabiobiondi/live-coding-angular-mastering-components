import { Component, ViewChild, ViewEncapsulation, AfterContentInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'fb-grid',
  template: '<div #host class="row"><ng-content></ng-content></div>',
})
export class GridComponent implements AfterContentInit {
  @ViewChild('host') host;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    const el = this.host.nativeElement;
    for (const item of el.children) {
      // item.classList.add('col');
      this.renderer.addClass(item, 'col');
    }
    /*
    // display an expeption if grid has no children
    // NOTE: this check does not work when children content is async
    if (el.children.length === 0) {
      throw new Error('<grid> component cannot have ZERO elements');
    }
    */
  }
}
