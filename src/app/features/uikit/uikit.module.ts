import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitRoutingModule } from './uikit-routing.module';
import { UikitComponent } from './uikit.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UikitComponent],
  imports: [
    CommonModule,
    SharedModule,
    UikitRoutingModule
  ]
})
export class UikitModule { }
