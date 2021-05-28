import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuListService } from 'src/app/Administration/menulist/menulist.service';
import { MenumaintenanceService } from 'src/app/Administration/menumaintenance/menumaintenance.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenulistComponent } from './Administration/menulist/menulist.component';
import { HttpClientModule } from '@angular/common/http';
import { MenumaintenanceComponent } from './Administration/menumaintenance/menumaintenance.component';
import { FormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    MenulistComponent,
    MenumaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MenuListService, MenumaintenanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
