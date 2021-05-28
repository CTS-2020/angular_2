import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenulistComponent } from './Administration/menulist/menulist.component'
import { MenumaintenanceComponent } from './Administration/menumaintenance/menumaintenance.component'

const routes: Routes = [
  { path: 'menulist', component: MenulistComponent },
  { path: 'menumaintenance/:UID', component: MenumaintenanceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
