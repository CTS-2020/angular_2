import { Component, Input, OnInit } from '@angular/core';
import { MenuMaintenance } from './menumaintenance';
import { MenumaintenanceService } from 'src/app/Administration/menumaintenance/menumaintenance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menumaintenance',
  templateUrl: './menumaintenance.component.html',
  styleUrls: ['./menumaintenance.component.scss']
})
export class MenumaintenanceComponent implements OnInit {

  @Input() userInput: any;
  MenuMaintenance!: MenuMaintenance;

  constructor(private menumaintenanceService: MenumaintenanceService, private activeRoute: ActivatedRoute) { }

  loadMenuDtls() {
    const uid = this.activeRoute.snapshot.params.UID;
    this.menumaintenanceService.getMenuDtls(uid).subscribe(u =>
      this.MenuMaintenance = {
        UID: u[0]["UID"],
        MenuID: u[0]["MenuID"],
        MenuName: u[0]["MenuName"],
        CreatedBy: u[0]["CreatedBy"],
        CreatedDt: u[0]["CreatedDt"],
        ModifiedBy: u[0]["ModifiedBy"],
        ModifiedDt: u[0]["ModifiedDt"]  
      }
    );
  }

  updateMenu() {
    var val = {
      UID: this.MenuMaintenance.UID,
      MenuID: this.MenuMaintenance.MenuID,
      MenuName: this.MenuMaintenance.MenuName,
      CreatedBy: this.MenuMaintenance.CreatedBy,
      CreatedDt: this.MenuMaintenance.CreatedDt,
      ModifiedBy: this.MenuMaintenance.ModifiedBy,
      ModifiedDt: this.MenuMaintenance.ModifiedDt 
    };

    this.menumaintenanceService.updateMenu(this.MenuMaintenance.UID,val).subscribe((responseBody) => {
      console.log(responseBody);
    });
  }

  redirectMenuList() {
    window.location.href = '/menulist';
  }

  ngOnInit(): void {
    this.loadMenuDtls();
  }

}
