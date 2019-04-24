import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS, DIRECTIVES } from './components';

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES],
  entryComponents: [...COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
