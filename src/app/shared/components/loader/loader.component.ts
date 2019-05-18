import {
  Directive, ViewContainerRef, Input,
  ComponentFactoryResolver, ComponentRef, OnDestroy,
} from '@angular/core';
import { DashboardWidget } from '../../../model/dashboard-widget';

@Directive({
  selector: '[fbLoader]',
})
export class LoaderDirective implements OnDestroy {
  constructor(
    private view: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
  ) { }

  private ref: ComponentRef<any>;

  @Input() set fbLoader(config: DashboardWidget) {
    this.view.clear();
    if (config) {
      const factory = this.resolver.resolveComponentFactory(config.type);
      this.ref = this.view.createComponent(factory);
      for (const key in config.data) {
        if (key) {
          this.ref.instance[key] = config.data[key];
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.destroy();
    }
  }
}
