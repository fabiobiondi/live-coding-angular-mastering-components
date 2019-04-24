import {
  Directive, ElementRef, ViewContainerRef, Input,
  ComponentFactoryResolver, ComponentRef, OnDestroy, ChangeDetectorRef,
} from '@angular/core';

@Directive({
  selector: '[fbLoader]',
})
export class LoaderDirective implements OnDestroy {
  constructor(
    private view: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) { }

  private ref: ComponentRef<any>;

  @Input() set fbLoader(component) {
    this.view.clear();
    if (component) {
      const factory = this.resolver.resolveComponentFactory(component.type);
      this.ref = this.view.createComponent(factory);
      for (const key in component.data) {
        if (key) {
          this.ref.instance[key] = component.data[key];
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
