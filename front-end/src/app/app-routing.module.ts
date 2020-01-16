import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {CaptorsComponent} from './captors/captors.component';
import {ConfigurationComponent} from './configuration/configuration.component';


const routes: Routes = [
  {path: '', redirectTo: '/menu/devices', pathMatch: 'full'},
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {path: 'devices', component: CaptorsComponent},
      {path: 'configurations', component: ConfigurationComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
