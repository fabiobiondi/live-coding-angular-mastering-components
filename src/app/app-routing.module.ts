import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'uikit', loadChildren: './features/uikit/uikit.module#UikitModule' },
  { path: '**', redirectTo: 'uikit'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
