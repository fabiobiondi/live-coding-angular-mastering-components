import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UikitComponent } from './uikit.component';

const routes: Routes = [
  { path: '', component: UikitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UikitRoutingModule { }
