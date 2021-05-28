import { Component, Input, OnInit } from '@angular/core';
import { Menu } from './menulist';
import { MenuListService } from 'src/app/Administration/menulist/menulist.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

  @Input() userInput: any;
  menu!: Menu;
  menuList: any = [];

  constructor(private menuListService: MenuListService, private activeRoute: ActivatedRoute) { }

  loadMenuList() {
    this.menuListService.getMenuList().subscribe(
      (data: any) => {
        this.menuList = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.loadMenuList();
  }

}

