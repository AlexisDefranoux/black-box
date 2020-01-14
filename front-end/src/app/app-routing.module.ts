import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {CaptorsComponent} from './captors/captors.component';


const routes: Routes = [
  {path: '', redirectTo: '/menu/captors', pathMatch: 'full'},
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {path: 'captors', component: CaptorsComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
